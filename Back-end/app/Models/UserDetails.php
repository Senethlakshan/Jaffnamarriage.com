<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetails extends Model
{
    protected $table = 'user_details';

    protected $fillable = [
        'user_id',
        'livingPlace',
        'religion',
        'age',
        'cast',
        'education',
        'height',
        'weight',
        'workDetails',
        'gender',
        'spokenLnguage',
        'town',
        'phonenum',
        'Termsagree',
        'selectedPlans',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}