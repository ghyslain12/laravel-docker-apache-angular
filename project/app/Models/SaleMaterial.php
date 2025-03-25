<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\Material;
use App\Models\Ticket;

class SaleMaterial extends Model
{
    use HasFactory;
    
    protected $fillable = ['sale_id', 'material_id'];
        
}
