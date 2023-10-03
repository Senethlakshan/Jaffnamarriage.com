<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserDetails;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\UserImage;
use Illuminate\Support\Facades\DB;
use App\Models\Like;
use Carbon\Carbon;

class UserDetailsController extends Controller
{
   
  public function insertUserDatial(Request $request){
    // Get the currently authenticated user
    $user = auth()->user();

    if (!$user) {
        return response()->json(['message' => 'User not authenticated'], 401);
    }

    // Create a new UserDetail instance with the validated data
    $userDetail = new UserDetails();
    $userDetail->user_id = $user->id; // Use the user's ID from the authentication
    $userDetail->age = $request->input('age');
    $userDetail->cast = $request->input('cast');
    $userDetail->education = $request->input('education');
    $userDetail->livingPlace = $request->input('livingPlace');
    $userDetail->religion = $request->input('religion');
    $userDetail->height = $request->input('height');
    $userDetail->weight = $request->input('weight');
    $userDetail->workDetails = $request->input('workDetails');
    $userDetail->gender = $request->input('gender');
    $userDetail->spokenLnguage = $request->input('spokenLnguage');
    $userDetail->town = $request->input('town');
    $userDetail->Termsagree = $request->input('agree');
    $userDetail->selectedPlans = $request->input('selectedPlans');

    // Save the new user detail record
    $userDetail->save();

    return response()->json(['status' => true,'message' => 'User details saved successfully'], 200);
}

public function uploadUserImages(Request $request)
{
  
     $user = auth()->user();

    if (!$user) {
        return response()->json(['message' => 'User not authenticated'], 401);
    }
    $userId = $user->id;
    // Custom validation messages (optional)
    $messages = [
        'images.required' => 'At least one image file is required.',
        'images.array' => 'The uploaded files must be in an array format.',
        'images.*.image' => 'Each uploaded file must be an image.',
        'images.*.mimes' => 'Each uploaded file must be of type: jpeg, png, jpg, gif.',
        'images.*.max' => 'Each uploaded file may not be larger than 2MB.',
    ];

    // Define validation rules
    $rules = [
        'images' => 'required|array',
        'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
    ];

    // Validate the request
    $validator = Validator::make($request->all(), $rules, $messages);

    // Check if validation fails
    if ($validator->fails()) {
        // Handle the validation error response here
        return response()->json(['errors' => $validator->errors()], 422);
    }

    // Process each uploaded image
    $uploadedImages = [];

    foreach ($request->file('images') as $image) {
        $newName = rand() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('public/userImages/'.$userId, $newName);
        $uploadedImages[] = $newName;
    }
    foreach ($uploadedImages as $imageName) {
      UserImage::create([
          'user_id' => $userId,
          'image_name' => $imageName,
          'image_path' => 'storage/userImages/' . $userId . '/' . $imageName,
      ]);
    }
    return response()->json(['message' => 'Files uploaded successfully', 'images' => $uploadedImages]);
}
  
public function getallActiveUsers()
{
    $activeUsersWithImages = DB::table('users')
        ->join('user_images', 'users.id', '=', 'user_images.user_id')
        ->where('users.active', true)
        ->select('users.id as user_id', 'users.name', 'users.updated_at', 'user_images.image_path')
        ->get();

    $activeUsersWithDetails = DB::table('users')
        ->join('user_details', 'users.id', '=', 'user_details.user_id')
        ->where('users.active', true)
        ->select('users.id as user_id', 'user_details.*')
        ->get();

    $mergedData = [];

    // Merge data from both queries based on the user_id
    foreach ($activeUsersWithImages as $imageData) {
        $userId = $imageData->user_id;

        // Create a new user entry if it doesn't exist in the merged array
        if (!isset($mergedData[$userId])) {
            $mergedData[$userId] = [
                'user_id' => $userId,
                'name' => $imageData->name, // Set the name from image data
                'updated_at' => Carbon::parse($imageData->updated_at)->diffForHumans(), // Convert to "time ago" format
                'images' => [],
                'details' => [],
            ];
        }

        // Add user image data to the existing user entry
        $mergedData[$userId]['images'][] = [
            'image_path' => $imageData->image_path,
        ];
    }

    // Merge data from the second query into the existing user entries
    foreach ($activeUsersWithDetails as $detailsData) {
        $userId = $detailsData->user_id;

        if (isset($mergedData[$userId])) {
            // Add user details data to the existing user entry
            $mergedData[$userId]['details'] = [
                'livingPlace' => $detailsData->livingPlace,
                'religion' => $detailsData->religion,
                'age' => $detailsData->age,
                'cast' => $detailsData->cast,
                'education' => $detailsData->education,
                'height' => $detailsData->height,
                'weight' => $detailsData->weight,
                'workDetails' => $detailsData->workDetails,
                'gender' => $detailsData->gender,
                'spokenLnguage' => $detailsData->spokenLnguage,
                'town' => $detailsData->town,
                'Termsagree' => $detailsData->Termsagree,
                'selectedPlans' => $detailsData->selectedPlans,
            ];
        }
    }

    // Convert the merged data into a flat array
    $mergedData = array_values($mergedData);

    // Return the merged data as a JSON response
    return response()->json(['activeUsersWithImagesAndDetails' => $mergedData]);
}

public function getOneByOneActiveUsers(Request $request, $userId)
{
    $activeUserWithImages = DB::table('users')
        ->join('user_images', 'users.id', '=', 'user_images.user_id')
        ->where('users.id', $userId) // Filter by user ID
        ->where('users.active', true)
        ->select('users.id as user_id', 'users.name', 'users.updated_at', 'user_images.image_path')
        ->get();

    $activeUserWithDetails = DB::table('users')
        ->join('user_details', 'users.id', '=', 'user_details.user_id')
        ->where('users.id', $userId) // Filter by user ID
        ->where('users.active', true)
        ->select('users.id as user_id', 'user_details.*')
        ->get();

    // Initialize merged data as null
    $mergedData = null;

    // Check if both queries returned data
    if ($activeUserWithImages->isNotEmpty() && $activeUserWithDetails->isNotEmpty()) {
        $imageData = $activeUserWithImages->first();
        $detailsData = $activeUserWithDetails->first();

        // Create the merged user entry
        $mergedData = [
            'user_id' => $userId,
            'name' => $imageData->name,
            'updated_at' => Carbon::parse($imageData->updated_at)->diffForHumans(),
            'images' => [
                ['image_path' => $imageData->image_path],
            ],
            'details' => [
                'livingPlace' => $detailsData->livingPlace,
                'religion' => $detailsData->religion,
                'age' => $detailsData->age,
                'cast' => $detailsData->cast,
                'education' => $detailsData->education,
                'height' => $detailsData->height,
                'weight' => $detailsData->weight,
                'workDetails' => $detailsData->workDetails,
                'gender' => $detailsData->gender,
                'spokenLnguage' => $detailsData->spokenLnguage,
                'town' => $detailsData->town,
                'Termsagree' => $detailsData->Termsagree,
                'selectedPlans' => $detailsData->selectedPlans,
            ],
        ];
    }

    // Return the merged data as a JSON response
    return response()->json(['activeUserWithImagesAndDetails' => $mergedData]);
}


public function updateItemLikeStatus(Request $request, $item_id = null){
   
    $user = auth()->user();
    $likedItemIds = []; // Initialize an array to store liked item IDs

    if ($item_id !== null) {
        // Check if the user has already liked the item
        $like = Like::where('user_id', $user->id)
                    ->where('liked_item_id', $item_id)
                    ->first();
                    
        if ($like) {
            // User has already liked the item, so unlike it
            $like->delete();
            $message = 'Item unliked successfully.';
        } else {
            // User has not liked the item, so like it
            $newLike = new Like([
                'user_id' => $user->id,
                'liked_item_id' => $item_id,
            ]);
            $newLike->save();
            $message = 'Item liked successfully.';
        }
    }else{
        $message = 'All Item liked';
    }

    // Retrieve the list of item IDs liked by the user after the update
    $likedItemIds = Like::where('user_id', $user->id)
                         ->pluck('liked_item_id')
                         ->toArray();

    return response()->json(['message' => $message, 'liked_item_ids' => $likedItemIds]);
}


}
