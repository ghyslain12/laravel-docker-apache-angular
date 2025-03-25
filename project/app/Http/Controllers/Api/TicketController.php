<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Models\Sale;
use App\Models\Contrat;
use App\Http\Resources\ContratRessource;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Hash;

class TicketController extends Controller
{
    public function index()
    {
        $tickets = Ticket::with('sales')->get();
        return response()->json($tickets);        
    }

    public function store(Request $request)
    {
        $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required',
            'sale_id' => 'required|integer|max:255',
        ]);

        $ticket = Ticket::create([
            'titre' => $request->titre,
            'description' => $request->description,
        ]);

        $sale = Sale::findOrFail($request->sale_id);
        $sale->tickets()->attach($ticket);

        return response()->json($ticket, 201);
    }

    public function show($id)
    {
        $ticket = Ticket::findOrFail($id);
        return response()->json($ticket->load('sales'));
    }

    public function update(Request $request, $id)
    {
        $ticket = Ticket::findOrFail($id);

        $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required',
        ]);

        $data = $request->only(['titre', 'description']);

        $ticket->update($data);
        
        $sale = Sale::findOrFail($request->sale_id);
        $sale->tickets()->sync($ticket);
       
        return response()->json($ticket);
    }

    public function destroy($id)
    {
        $ticket = Ticket::findOrFail($id);
        $ticket->delete();
        return response()->json(null, 204);
    }
}