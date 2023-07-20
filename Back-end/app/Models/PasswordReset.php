<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PasswordReset extends Model
{
    use HasFactory;
    protected $table = 'password_reset_tokens';
    public $timestamps = false;
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $fillable = [
        'id',
        'email',
        'token',
        'expires_at',
        'created_at'
    ];
}
