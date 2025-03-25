<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UtilisateurController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\MaterialController;
use App\Http\Controllers\Api\SaleController;
use App\Http\Controllers\Api\TicketController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('utilisateur')->group(function () {
    Route::get('/ping', [UtilisateurController::class, 'ping']);
    Route::get('/', [UtilisateurController::class, 'index']);
    Route::post('/', [UtilisateurController::class, 'store']);
    Route::get('/{id}', [UtilisateurController::class, 'show']);
    Route::put('/{id}', [UtilisateurController::class, 'update']);
    Route::delete('/{id}', [UtilisateurController::class, 'destroy']);
});
Route::prefix('client')->group(function () {
    Route::get('/', [ClientController::class, 'index']);
    Route::post('/', [ClientController::class, 'store']);
    Route::get('/{id}', [ClientController::class, 'show']);
    Route::put('/{id}', [ClientController::class, 'update']);
    Route::delete('/{id}', [ClientController::class, 'destroy']);
});
Route::prefix('material')->group(function () {
    Route::get('/ping', [MaterialController::class, 'ping']);
    Route::get('/', [MaterialController::class, 'index']);
    Route::post('/', [MaterialController::class, 'store']);
    Route::get('/{id}', [MaterialController::class, 'show']);
    Route::put('/{id}', [MaterialController::class, 'update']);
    Route::delete('/{id}', [MaterialController::class, 'destroy']);
});
Route::prefix('sale')->group(function () {
    Route::get('/', [SaleController::class, 'index']);
    Route::post('/', [SaleController::class, 'store']);
    Route::get('/{id}', [SaleController::class, 'show']);
    Route::put('/{id}', [SaleController::class, 'update']);
    Route::delete('/{id}', [SaleController::class, 'destroy']);
});
Route::prefix('ticket')->group(function () {
    Route::get('/', [TicketController::class, 'index']);
    Route::post('/', [TicketController::class, 'store']);
    Route::get('/{id}', [TicketController::class, 'show']);
    Route::put('/{id}', [TicketController::class, 'update']);
    Route::delete('/{id}', [TicketController::class, 'destroy']);
});

