<?php

namespace Tests\Feature\Api\Controller;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use App\Models\Sale;
use App\Models\Customer;
use PHPUnit\Framework\Attributes\Test;

class SaleControllerTest extends TestCase
{
    use DatabaseTransactions;

    protected $sale;

    protected function setUp(): void
    {
        parent::setUp();
    }

    #[Test]
    public function it_lists_sales_successfully()
    {
        Sale::factory()->count(3)->create();

        $response = $this->getJson('/api/sale');

        $response->assertStatus(200)
                 ->assertJsonCount(3)
                 ->assertJsonStructure([
                     '*' => ['id', 'titre', 'description', 'customer_id', 'created_at', 'updated_at'],
                 ]);
    }

    #[Test]
    public function it_creates_a_new_sale()
    {
        $customer = Customer::factory()->create();

        $data = [
            'titre' => 'SaleTest',
            'description' => 'DescriptionTest',
            'customer_id' => $customer->id,
        ];

        $response = $this->postJson('/api/sale', $data);

        $response->assertStatus(201)
                 ->assertJsonFragment([
                     'titre' => 'SaleTest',
                     'description' => 'DescriptionTest',
                     'customer_id' => $customer->id,
                 ])
                 ->assertJsonStructure(['id', 'titre', 'description', 'customer_id', 'created_at', 'updated_at']);

        $this->assertDatabaseHas('sales', ['titre' => 'SaleTest']);
    }

    #[Test]
    public function it_fails_to_create_sale_with_invalid_data()
    {
        $data = [
            'titre' => '',
            'customer_id' => 999,
        ];

        $response = $this->postJson('/api/sale', $data);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['titre', 'customer_id']);
    }

    #[Test]
    public function it_shows_a_sale_successfully()
    {
        $this->sale = Sale::factory()->create();

        $response = $this->getJson("/api/sale/{$this->sale->id}");

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'id' => $this->sale->id,
                     'titre' => $this->sale->titre,
                     'description' => $this->sale->description,
                     'customer_id' => $this->sale->customer_id,
                 ])
                 ->assertJsonStructure(['id', 'titre', 'description', 'customer_id', 'created_at', 'updated_at']);
    }

    #[Test]
    public function it_fails_to_show_nonexistent_sale()
    {
        $response = $this->getJson('/api/sale/999');

        $response->assertStatus(404);
    }

    #[Test]
    public function it_updates_a_sale_successfully()
    {
        $this->sale = Sale::factory()->create();
        $customer = Customer::factory()->create();

        $data = [
            'titre' => 'UpdatedSale',
            'description' => 'UpdatedDescription',
            'customer_id' => $customer->id,
        ];

        $response = $this->putJson("/api/sale/{$this->sale->id}", $data);

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'titre' => 'UpdatedSale',
                     'description' => 'UpdatedDescription',
                     'customer_id' => $customer->id,
                 ])
                 ->assertJsonStructure(['id', 'titre', 'description', 'customer_id', 'created_at', 'updated_at']);
    }

    #[Test]
    public function it_deletes_a_sale_successfully()
    {
        $this->sale = Sale::factory()->create();

        $response = $this->deleteJson("/api/sale/{$this->sale->id}");

        $response->assertStatus(204);

        $this->assertDatabaseMissing('sales', ['id' => $this->sale->id]);
    }

    #[Test]
    public function it_fails_to_delete_nonexistent_sale()
    {
        $response = $this->deleteJson('/api/sale/999');

        $response->assertStatus(404);
    }
}
