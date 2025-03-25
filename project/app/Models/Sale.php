<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\Material;
use App\Models\Ticket;

class Sale extends Model
{
    use HasFactory;
    
    protected $fillable = ['titre', 'description', 'customer_id', 'ticket_id', 'sale_id', 'material_id'];
    
    /**
     * Get the customer associated with the sale.
     */
    public function customer(): HasOne
    {
        //return $this->hasOne(Customer::class);
        return $this->hasOne(Customer::class, 'id', 'customer_id');
    }    
    
    public function materials(): BelongsToMany {
        return $this->belongsToMany(Material::class);
    }
    
    public function tickets(): BelongsToMany {
        return $this->belongsToMany(Ticket::class);
    }
    
}
