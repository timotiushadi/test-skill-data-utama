<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;

    public $table = 'products';

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    // Declare fillable fields
    protected $fillable = [
        'name',
        'price',
        'stock',
        'description',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function transactions(){
        return $this->hasMany('App\Models\Transaction', 'product_id');
    }
}
