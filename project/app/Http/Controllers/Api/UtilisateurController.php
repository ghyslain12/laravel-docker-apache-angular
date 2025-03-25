<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Contrat;
use App\Http\Resources\ContratRessource;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UtilisateurController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:4',
        ]);

        $utilisateur = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json($utilisateur, 201);
    }

    public function show($id)
    {
        $utilisateur = User::findOrFail($id);
        return response()->json($utilisateur);
    }

    public function update(Request $request, $id)
    {
        $utilisateur = User::findOrFail($id);

        $request->validate([
            'name' => 'string|max:255',
            'email' => 'string|email|max:255|unique:users,email,' . $utilisateur->id,
        ]);

        $data = $request->only(['name', 'email']);
        if ($request->has('password')) {
            $data['password'] = Hash::make($request->password);
        }

        $utilisateur->update($data);
        return response()->json($utilisateur);
    }

    public function destroy($id)
    {
        $utilisateur = User::findOrFail($id);
        $utilisateur->delete();
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