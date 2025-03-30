<?php

namespace Tests\Feature\Api\Controller;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use App\Models\Ticket;
use PHPUnit\Framework\Attributes\Test;
use App\Models\Sale;

class TicketControllerTest extends TestCase
{
    use DatabaseTransactions;

    protected $ticket;

    protected function setUp(): void
    {
        parent::setUp();
    }

    #[Test]
    public function it_lists_tickets_successfully()
    {
        Ticket::factory()->count(3)->create();

        $response = $this->getJson('/api/ticket');

        $response->assertStatus(200)
                 ->assertJsonCount(3)
                 ->assertJsonStructure([
                     '*' => ['id', 'titre', 'description', 'created_at', 'updated_at'],
                 ]);
    }

    #[Test]
    public function it_creates_a_new_ticket()
    {
        $sale = Sale::factory()->create(); // Crée un Sale valide

        $data = [
            'titre' => 'TicketTest',
            'description' => 'DescriptionTest',
            'sale_id' => $sale->id, // Ajoute un sale_id valide
        ];

        $response = $this->postJson('/api/ticket', $data);

        $response->assertStatus(201)
                 ->assertJsonFragment([
                     'titre' => 'TicketTest',
                     'description' => 'DescriptionTest',
                 ])
                 ->assertJsonStructure(['id', 'titre', 'description', 'created_at', 'updated_at']);

        $this->assertDatabaseHas('tickets', ['titre' => 'TicketTest']);
    }

    #[Test]
    public function it_fails_to_create_ticket_with_invalid_data()
    {
        $data = [
            'titre' => '', // Required field
        ];

        $response = $this->postJson('/api/ticket', $data);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors('titre');
    }

    #[Test]
    public function it_shows_a_ticket_successfully()
    {
        $this->ticket = Ticket::factory()->create();

        $response = $this->getJson("/api/ticket/{$this->ticket->id}");

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'id' => $this->ticket->id,
                     'titre' => $this->ticket->titre,
                     'description' => $this->ticket->description,
                 ])
                 ->assertJsonStructure(['id', 'titre', 'description', 'created_at', 'updated_at']);
    }

    #[Test]
    public function it_fails_to_show_nonexistent_ticket()
    {
        $response = $this->getJson('/api/ticket/999');

        $response->assertStatus(404);
    }

    #[Test]
    public function it_updates_a_ticket_successfully()
    {
        $sale = Sale::factory()->create(); // Crée un Sale valide
        $this->ticket = Ticket::factory()->create();

        $data = [
            'titre' => 'UpdatedTicket',
            'description' => 'UpdatedDescription',
            'sale_id' => $sale->id, // Ajoute un sale_id valide
        ];

        $response = $this->putJson("/api/ticket/{$this->ticket->id}", $data);

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'titre' => 'UpdatedTicket',
                     'description' => 'UpdatedDescription',
                 ])
                 ->assertJsonStructure(['id', 'titre', 'description', 'created_at', 'updated_at']);
    }

    #[Test]
    public function it_deletes_a_ticket_successfully()
    {
        $this->ticket = Ticket::factory()->create();

        $response = $this->deleteJson("/api/ticket/{$this->ticket->id}");

        $response->assertStatus(204);

        $this->assertDatabaseMissing('tickets', ['id' => $this->ticket->id]);
    }

    #[Test]
    public function it_fails_to_delete_nonexistent_ticket()
    {
        $response = $this->deleteJson('/api/ticket/999');

        $response->assertStatus(404);
    }
}
