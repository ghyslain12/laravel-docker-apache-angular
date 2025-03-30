<?php

namespace Tests\Feature\Api\Controller;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use App\Models\Customer;
use App\Models\User;
use PHPUnit\Framework\Attributes\Test;

class CustomerControllerTest extends TestCase
{
    use DatabaseTransactions;

    protected $customer;

    protected function setUp(): void
    {
        parent::setUp();
    }

    #[Test]
    public function it_lists_customers_successfully()
    {
        Customer::factory()->count(3)->create();

        $response = $this->getJson('/api/client');

        $response->assertStatus(200)
                 ->assertJsonCount(3)
                 ->assertJsonStructure([
                     '*' => ['id', 'surnom', 'user_id', 'created_at', 'updated_at'],
                 ]);
    }

    #[Test]
    public function it_creates_a_new_customer()
    {
        $user = User::factory()->create();
        $data = [
            'surnom' => 'ClientTest',
            'user_id' => $user->id,
        ];

        $response = $this->postJson('/api/client', $data);

        $response->assertStatus(201)
                 ->assertJsonFragment([
                     'surnom' => 'ClientTest',
                     'user_id' => $user->id,
                 ])
                 ->assertJsonStructure(['id', 'surnom', 'user_id', 'created_at', 'updated_at']);

        $this->assertDatabaseHas('customers', ['surnom' => 'ClientTest']);
    }

    #[Test]
    public function it_fails_to_create_customer_with_invalid_data()
    {
        $data = [
            'surnom' => '', // Required field
            'user_id' => 999, // Non-existent user
        ];

        $response = $this->postJson('/api/client', $data);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['surnom', 'user_id']);
    }

    #[Test]
    public function it_shows_a_customer_successfully()
    {
        $this->customer = Customer::factory()->create();

        $response = $this->getJson("/api/client/{$this->customer->id}");

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'id' => $this->customer->id,
                     'surnom' => $this->customer->surnom,
                     'user_id' => $this->customer->user_id,
                 ])
                 ->assertJsonStructure(['id', 'surnom', 'user_id', 'created_at', 'updated_at']);
    }

    #[Test]
    public function it_fails_to_show_nonexistent_customer()
    {
        $response = $this->getJson('/api/client/999');

        $response->assertStatus(404);
    }

    #[Test]
    public function it_updates_a_customer_successfully()
    {
        $this->customer = Customer::factory()->create();
        $user = User::factory()->create();

        $data = [
            'surnom' => 'UpdatedClient',
            'user_id' => $user->id,
        ];

        $response = $this->putJson("/api/client/{$this->customer->id}", $data);

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'surnom' => 'UpdatedClient',
                     'user_id' => $user->id,
                 ])
                 ->assertJsonStructure(['id', 'surnom', 'user_id', 'created_at', 'updated_at']);
    }

    #[Test]
    public function it_fails_to_update_customer_with_invalid_user_id()
    {
        $this->customer = Customer::factory()->create();

        $data = [
            'user_id' => 999, // Non-existent user
        ];

        $response = $this->putJson("/api/client/{$this->customer->id}", $data);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors('user_id');
    }

    #[Test]
    public function it_deletes_a_customer_successfully()
    {
        $this->customer = Customer::factory()->create();

        $response = $this->deleteJson("/api/client/{$this->customer->id}");

        $response->assertStatus(204);

        $this->assertDatabaseMissing('customers', ['id' => $this->customer->id]);
    }

    #[Test]
    public function it_fails_to_delete_nonexistent_customer()
    {
        $response = $this->deleteJson('/api/client/999');

        $response->assertStatus(404);
    }
}
