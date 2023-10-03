<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;
    protected $table = 'users_likes';

    protected $fillable = [
        'user_id',
        'liked_item_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function likedItem()
    {
        return $this->belongsTo(Item::class, 'liked_item_id');
    }
}
