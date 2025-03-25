<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\Sale;

class Material extends Model
{
    use HasFactory;
    
    protected $fillable = ['designation'];
    
    public function sales(): BelongsToMany {
        return $this->belongsToMany(Sale::class);
    }
    
}
