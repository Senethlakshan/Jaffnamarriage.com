<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommonController;
use App\Http\Controllers\UserDetailsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/validToken', [CommonController::class, 'validToken'] );

Route::post('/login', [CommonController::class, 'login']);
Route::post('/register', [CommonController::class, 'register']);
Route::middleware('auth:sanctum')->get('/logout', [CommonController::class, 'logout']);
Route::post('/sendotp', [CommonController::class, 'sendOtp']);
Route::post('/checkotp', [CommonController::class, 'checkOtp']);
Route::post('/createForgotPass', [CommonController::class, 'createForgotPassword']);
Route::middleware('auth:sanctum')->post('/insertUserDatial', [UserDetailsController::class, 'insertUserDatial']);
Route::middleware('auth:sanctum')->post('/uploadUserImages', [UserDetailsController::class, 'uploadUserImages']);
Route::middleware('auth:sanctum')->get('/allActiveUsers', [UserDetailsController::class, 'getallActiveUsers']);
Route::post('/like/{item_id}', 'LikeController@toggleLike');
Route::middleware('auth:sanctum')->post('/likeUsers/{item_id}', [UserDetailsController::class, 'updateItemLikeStatus']);
Route::middleware('auth:sanctum')->post('/likeUsers', [UserDetailsController::class, 'updateItemLikeStatus']);
Route::get('/selectUserProfile/{userId}', [UserDetailsController::class, 'getOneByOneActiveUsers']);
Route::middleware('auth:sanctum')->get('/checkUserActive', [UserDetailsController::class, 'getcheckUserActiveStatus']);
Route::middleware('auth:sanctum')->post('/uploadUserProfilePic', [UserDetailsController::class, 'uploadUserProfilePic']);
Route::post('/getSearchData', [UserDetailsController::class, 'getSearchUserData']);