<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Sale;
use App\Models\Contrat;
use App\Http\Resources\ContratRessource;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\JsonResponse;

class SaleController extends Controller
{
    public function index(): JsonResponse
    {
        $sales = Sale::with('materials')->get();
        return response()->json($sales);        
    }

    public function store(Request $request)/*: JsonResponse*/
    {
        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required',
            'customer_id' => 'required|integer',
        ]);
        
        $materials = [];
        foreach ($request->all() as $key => $value) {
            if (str_contains($key, "material_") && $value) {
                list($type, $id) = explode('_', $key);
                array_push($materials, $id);
            }
        }  

        $sale = Sale::create([
            'titre' => $validated['titre'],
            'description' => $validated['description'],
            'customer_id' => $validated['customer_id']
        ]);
        
        if ($materials) {
            $sale->materials()->attach($materials);
        }

        return response()->json($sale->load('materials'), 201);
    }

    public function show($id): JsonResponse
    {
        $sale = Sale::findOrFail($id);        
        return response()->json($sale->load('materials', 'customer'));
    }

    public function update(Request $request, $id)
    {
        $sale = Sale::findOrFail($id);

        $validated = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required',
            'customer_id' => 'required|integer',
        ]);

        $sale->update($validated);

        $materials = [];
        foreach ($request->all() as $key => $value) {
            if (str_contains($key, "material_") && boolval($value)) {
                list($type, $id) = explode('_', $key);
                array_push($materials, $id);
            }
        } 
        
        
        if ($materials) {
            $sale->materials()->sync($materials ?? []);
        }

        return response()->json($sale->load('materials'));
    }

    public function destroy($id): JsonResponse
    {
        $sale = Sale::findOrFail($id);
        $sale->delete();
        return response()->json(null, 204);
    }
}