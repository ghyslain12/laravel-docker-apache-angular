<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Material;
use App\Models\Contrat;
use App\Http\Resources\ContratRessource;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Hash;

class MaterialController extends Controller
{
    public function index()
    {
        return Material::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'designation' => 'required|string|max:255',
        ]);

        $material = Material::create([
            'designation' => $request->designation,
        ]);

        return response()->json($material, 201);
    }

    public function show($id)
    {
        $material = Material::findOrFail($id);
        return response()->json($material);
    }

    public function update(Request $request, $id)
    {
        $material = Material::findOrFail($id);

        $request->validate([
            'designation' => 'required|string|max:255',
        ]);

        $data = $request->only(['designation']);

        $material->update($data);
        return response()->json($material);
    }

    public function destroy($id)
    {
        $material = Material::findOrFail($id);
        $material->delete();
        return response()->json(null, 204);
    }
    
    public function ping()
    {
        return response()->json([
            'status' => 'success',
            'message' => 'pong',
            'timestamp' => now()->toDateTimeString()
        ], 200);
    }        
}