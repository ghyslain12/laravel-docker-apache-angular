<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Contrat;
use App\Http\Resources\ContratRessource;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Hash;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Customer::with('user')->get();
        return response()->json($clients);   
    }

    public function store(Request $request)
    {
        $request->validate([
            'surnom' => 'required|string|max:255',
            'user_id' => 'required|integer|max:255',
        ]);

        $client = Customer::create([
            'surnom' => $request->surnom,
            'user_id' => $request->user_id,
        ]);

        return response()->json($client, 201);
    }

    public function show($id)
    {
        $client = Customer::findOrFail($id);
        return response()->json($client->load('user'));
    }

    public function update(Request $request, $id)
    {
        $client = Customer::findOrFail($id);

        $request->validate([
            'surnom' => 'required|string|max:255',
            'user_id' => 'required|integer|max:255',
        ]);

        $data = $request->only(['surnom', 'user_id']);

        $client->update($data);
        
        return response()->json($client);
    }

    public function destroy($id)
    {
        $client = Customer::findOrFail($id);
        $client->delete();
        return response()->json(null, 204);
    }
}