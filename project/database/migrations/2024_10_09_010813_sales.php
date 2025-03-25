<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('sales', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->text('description');
            $table->foreignId('customer_id')
                ->constrained()
                ->onUpdate('restrict') //En mettant restrict on empêche la suppression d’un customer qui a des sales. On doit donc commencer par supprimer ses sale avant de le supprimer lui-même.
                ->onDelete('restrict');            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
