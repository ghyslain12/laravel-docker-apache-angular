<?php

namespace Tests\Feature\Api\Controller;

use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;
use App\Models\Material;
use PHPUnit\Framework\Attributes\Test;

class MaterialControllerTest extends TestCase
{
    use DatabaseTransactions;

    protected $material;

    protected function setUp(): void
    {
        parent::setUp();
    }

    #[Test]
    public function it_lists_materials_successfully()
    {
        Material::factory()->count(3)->create();

        $response = $this->getJson('/api/material');

        $response->assertStatus(200)
                 ->assertJsonCount(3)
                 ->assertJsonStructure([
                     '*' => ['id', 'designation', 'created_at', 'updated_at'],
                 ]);
    }

    #[Test]
    public function it_creates_a_new_material()
    {
        $data = [
            'designation' => 'MaterialTest',
        ];

        $response = $this->postJson('/api/material', $data);

        $response->assertStatus(201)
                 ->assertJsonFragment([
                     'designation' => 'MaterialTest',
                 ])
                 ->assertJsonStructure(['id', 'designation', 'created_at', 'updated_at']);

        $this->assertDatabaseHas('materials', ['designation' => 'MaterialTest']);
    }

    #[Test]
    public function it_fails_to_create_material_with_invalid_data()
    {
        $data = [
            'designation' => '', // Required field
        ];

        $response = $this->postJson('/api/material', $data);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors('designation');
    }

    #[Test]
    public function it_shows_a_material_successfully()
    {
        $this->material = Material::factory()->create();

        $response = $this->getJson("/api/material/{$this->material->id}");

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'id' => $this->material->id,
                     'designation' => $this->material->designation,
                 ])
                 ->assertJsonStructure(['id', 'designation', 'created_at', 'updated_at']);
    }

    #[Test]
    public function it_fails_to_show_nonexistent_material()
    {
        $response = $this->getJson('/api/material/999');

        $response->assertStatus(404);
    }

    #[Test]
    public function it_updates_a_material_successfully()
    {
        $this->material = Material::factory()->create();

        $data = [
            'designation' => 'UpdatedMaterial',
        ];

        $response = $this->putJson("/api/material/{$this->material->id}", $data);

        $response->assertStatus(200)
                 ->assertJsonFragment([
                     'designation' => 'UpdatedMaterial',
                 ])
                 ->assertJsonStructure(['id', 'designation', 'created_at', 'updated_at']);
    }

    #[Test]
    public function it_deletes_a_material_successfully()
    {
        $this->material = Material::factory()->create();

        $response = $this->deleteJson("/api/material/{$this->material->id}");

        $response->assertStatus(204);

        $this->assertDatabaseMissing('materials', ['id' => $this->material->id]);
    }

    #[Test]
    public function it_fails_to_delete_nonexistent_material()
    {
        $response = $this->deleteJson('/api/material/999');

        $response->assertStatus(404);
    }
}
