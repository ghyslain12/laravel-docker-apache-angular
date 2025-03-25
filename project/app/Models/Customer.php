<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use App\Models\User;
use App\Models\Sale;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Customer extends Model
{
    use HasFactory;
    
    //protected $fillable = ['surnom'];
    protected $fillable = ['surnom', 'user_id'];
    
    /**
     * Get the user associated with the customer.
     */
    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }   
    
    /**
     * Get the sale that owns the customer.
     */
    public function sale(): HasMany
    {
        return $this->hasMany(Sale::class);

    }
    
    
}
