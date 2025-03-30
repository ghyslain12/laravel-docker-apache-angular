<?php

namespace Tests\Feature\Api\Controller;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use PHPUnit\Framework\Attributes\Test;

class UserControllerTest extends TestCase
{
    use DatabaseTransactions;

    protected $user;

    protected function setUp(): void
    {
        parent::setUp();
    }

    #[Test]
    public function it_lists_users_successfully()
    {
        User::factory()->count(3)->create();

        $response = $this->getJson('/api/utilisateur');

        $response->assertStatus(200)
                 ->assertJsonCount(3)
                 ->assertJsonStructure([
                     '*' => ['id', 'name', 'email', 'created_at', 'updated_at'],
                 ]);
    }

    #[Test]
    public function it_creates_a_new_user()
    {
        $data = [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => 'password123',
        ];

        $response = $this->postJson('/api/utilisateur', $data);

        $response->assertStatus(201)
                 ->assertJsonFragment([
                     'name' => 'John Doe',
                     'email' => 'john@example.com',
                 ])
                 ->assertJsonStructure(['id', 'name', 'email', 'created_at', 'updated_at']);

        $this->assertDatabaseHas('users', [
            'email' => 'john@example.com',
        ]);

        $this->assertTrue(Hash::check('password123', User::where('email', 'john@example.com')->first()->password));
    }

    #[Test]
    public function it_fails_to_create_user_with_invalid_data()
    {
        $data = [
            'name' => '',
            'email' => 'not-an-email',
            'password' => '123',
        ];

        $response = $this->postJson('/api/utilisateur', $data);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['name', 'email', 'password']);
    }

    #[Test]
    public function it_shows_a_user_successfully()
    {
        $this->user = User::factory()->create();

        $response = $this->getJson("/api/utilisateur/{$this->user->id}");

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'id' => $this->user->id,
                     'name' => $this->user->name,
                     'email' => $this->user->email,
                 ])
                 ->assertJsonStructure(['id', 'name', 'email', 'created_at', 'updated_at']);
    }

    #[Test]
    public function it_fails_to_show_nonexistent_user()
    {
        $response = $this->getJson('/api/utilisateur/999');

        $response->assertStatus(404);
    }

    #[Test]
    public function it_updates_a_user_successfully()
    {
        $this->user = User::factory()->create();

        $data = [
            'name' => 'Updated Name',
            'email' => 'updated@example.com',
            'password' => 'newpassword123',
        ];

        $response = $this->putJson("/api/utilisateur/{$this->user->id}", $data);

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'name' => 'Updated Name',
                     'email' => 'updated@example.com',
                 ])
                 ->assertJsonStructure(['id', 'name', 'email', 'created_at', 'updated_at']);

        $this->assertTrue(Hash::check('newpassword123', $this->user->fresh()->password));
    }

    #[Test]
    public function it_fails_to_update_user_with_invalid_email()
    {
        $this->user = User::factory()->create();

        $data = [
            'email' => 'invalid-email',
        ];

        $response = $this->putJson("/api/utilisateur/{$this->user->id}", $data);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors('email');
    }

    #[Test]
    public function it_fails_to_update_user_with_duplicate_email()
    {
        $this->user = User::factory()->create();
        $anotherUser = User::factory()->create(['email' => 'existing@example.com']);

        $data = [
            'email' => 'existing@example.com',
        ];

        $response = $this->putJson("/api/utilisateur/{$this->user->id}", $data);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors('email');
    }

    #[Test]
    public function it_deletes_a_user_successfully()
    {
        $this->user = User::factory()->create();

        $response = $this->deleteJson("/api/utilisateur/{$this->user->id}");

        $response->assertStatus(204);

        $this->assertDatabaseMissing('users', ['id' => $this->user->id]);
    }

    #[Test]
    public function it_fails_to_delete_nonexistent_user()
    {
        $response = $this->deleteJson('/api/utilisateur/999');

        $response->assertStatus(404);
    }
}
