<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommonController extends Controller
{

    // check valid token api
    public function validToken(Request $request)
{
    $user = auth()->user();


    // Check if the user is authenticated
    if ($user) {
        // User is authenticated
        // Perform any additional checks or actions based on the authenticated user
        // ...
        return response()->json(['message' => 'valid', 'user' => $user]);
    } else {
        // User is not authenticated or token is invalid
        $apiToken = $request->header('Authorization');
        return response()->json(['message' => 'invalid'], 401);
    }
}

// user login function
public function login(Request $request)
{
    // Validate the incoming request data
    $validatedData = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    // Attempt to authenticate the user using email and password
$user = User::where('email', $validatedData['email'])->first();

if (!$user) {
    // User with the given email not found
    return response()->json(['message' => 'Invalid email'], 401);
}

if (!Hash::check($validatedData['password'], $user->password)) {
    // Invalid password
    return response()->json(['message' => 'Invalid password'], 401);
}

// Authentication successful
$token = $user->createToken('Laravel API')->plainTextToken;

// Return a response indicating a successful login with the user and token
return response()->json(['message' => 'Login successful', 'user' => $user, 'token' => $token]);

}



    // user register api
    public function register(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string',
            'marriedStatus' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        // Create a new user with the validated data
        $user = new User();
        $user->name = $validatedData['name'];
        $user->marriedStatus = $validatedData['marriedStatus'];
        $user->email = $validatedData['email'];
        $user->password = Hash::make($validatedData['password']);
        $user->save();

        // Generate an access token for the user
        $token = $user->createToken('Laravel API')->plainTextToken;

        // Return a response indicating a successful registration with the cookie set
        return response()->json(['message' => 'Registration successful', 'user' => $user, 'token' =>$token]);
    }

    // user logout function

    public function logout(Request $request)
    {
        // Revoke the current user's API token
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Logout successful']);
    }
}
