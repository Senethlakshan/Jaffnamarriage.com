<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Mail\OtpEmail;
use App\Models\PasswordReset;

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

    // sent otp to forgot password
    public function sendOtp(Request $request)
    {
        $email = $request->input('email');
        
        // Generate a random OTP (e.g., 6 digits)
        $otp = rand(1000, 9999);
    
        // Attempt to authenticate the user using email
        $user = User::where('email', $email)->first();
    
        // Update or create the OTP record in the database
        if ($user) {
            $passwordReset = PasswordReset::where('email', $email)->first();
            
            if ($passwordReset) {
                // Record with the given email exists, so update it
                $passwordReset = PasswordReset::firstOrNew(['email' => $email]);
                $passwordReset->token = $otp;
                $passwordReset->expires_at = now()->addMinutes(3);
                $passwordReset->created_at = now();
                $passwordReset->save();
            } else {
                $passwordReset = new PasswordReset();
                $passwordReset->id = $email;
                $passwordReset->email = $email;
                $passwordReset->token = $otp;
                $passwordReset->expires_at = now()->addMinutes(3);
                $passwordReset->created_at = now();
                $passwordReset->save();
            }
            // Send the OTP email using the "otp.blade.php" view
            Mail::to($email)->send(new OtpEmail($otp));
            return response()->json(['message' => 'OTP sent', 'status' => 'true'], 200);
        } else {
            return response()->json(['message' => 'Email not registered', 'status' => 'false'], 200);
        }
    }
    
     // check otp code 
     public function checkOtp(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'email' => 'required|string',
            'completeOtp' => 'required|string',
        ]);

        $email = $request->input('email');
        $completeOtp = $request->input('completeOtp');

        // Check if the OTP exists in the database for the given email
        $passwordReset = PasswordReset::where('email', $email)
            ->where('token', $completeOtp)
            ->where('expires_at', '>', now()) // Check if the OTP is not expired
            ->first();

        if ($passwordReset) {
            // Perform any additional logic for successful OTP verification here
            // For example, reset the user's password, mark the OTP as used, etc.

            // Return a success response
            return response()->json(['message' => 'OTP verified successfully', 'status' => 'true'], 200);
        } else {
            return response()->json(['message' => 'Invalid OTP or OTP expired', 'status' => 'false'], 200);
        }
    }

    // create new passwords for forgot password


    public function createForgotPassword(Request $request)
{
    // Validate the incoming request data
    $request->validate([
        'email' => 'required|email',
        'confirmPassword' => 'required|min:6', // Assumes you have a confirmPassword field in the form
    ]);

    // Get the user record based on the provided email
    $user = User::where('email', $request->email)->first();

    // Check if the user exists
    if (!$user) {
        return response()->json([
            'status' => 'false',
            'message' => 'User not found with the provided email',
        ], 404);
    }

    // Update the user's password
    $user->password = Hash::make($request->confirmPassword);
    $user->save();
    // Generate an access token for the user
    $token = $user->createToken('Laravel API')->plainTextToken;
    return response()->json([
        'status' => 'true',
        'message' => 'Password reset successfully',
        'token' =>$token
    ], 200);
}
}

