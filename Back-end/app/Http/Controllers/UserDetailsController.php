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
       // Check if a user detail record already exists for the user
    $userDetail = UserDetails::where('user_id', $user->id)->first();

    if (!$userDetail) {
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
    $userDetail->phonenum = $request->input('pno');
    $userDetail->Termsagree = $request->input('agree');
    $userDetail->selectedPlans = $request->input('selectedPlans');

    // Save the new user detail record
    $userDetail->save();
    }else{
        $userDetail->update([
            'age' => $request->input('age'),
            'cast' => $request->input('cast'),
            'education' => $request->input('education'),
            'livingPlace' => $request->input('livingPlace'),
            'religion' => $request->input('religion'),
            'height' => $request->input('height'),
            'weight' => $request->input('weight'),
            'workDetails' => $request->input('workDetails'),
            'gender' => $request->input('gender'),
            'spokenLanguage' => $request->input('spokenLanguage'),
            'town' => $request->input('town'),
            'phonenum' => $request->input('pno'),
            'TermsAgree' => $request->input('agree'),
            'selectedPlans' => $request->input('selectedPlans'),
        ]);
    }
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

public function uploadUserProfilePic(Request $request)
{
    
     $user = auth()->user();

    if (!$user) {
        return response()->json(['message' => 'User not authenticated'], 401);
    }
    $userId = $user->id;
    // $request->validate([
    //     'profile_pic' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',// Adjust the validation rules as needed
    // ]);

    if ($request->hasFile('profile_pic')) {
        $image = $request->file('profile_pic');
        
        // Check if there's an existing record with profilePicStatus = 1
       $existingImage = UserImage::where('user_id', $userId)
       ->where('profilePicStatus', 1)
       ->first();

       if ($existingImage) {
        // Delete the associated file
        $imagePath = public_path($existingImage->image_path);
         // Check if the file exists before attempting to delete it
        if (file_exists($imagePath)) {
          // Delete the file
          unlink($imagePath);
        }
        // Delete the existing record
        $existingImage->delete();


       }
       $newName = time() . '_' . $image->getClientOriginalName();

       // Use the `store` method to save the file to the desired storage disk and directory
       $image->storeAs('public/userImages/' . $userId, $newName);

       // Now, insert the new record
       UserImage::create([
           'user_id' => $userId,
           'image_name' => $newName,
           'image_path' => 'storage/userImages/' . $userId . '/' . $newName,
           'profilePicStatus' => 1,
       ]);
      

        return response()->json(['message' => 'Image uploaded successfully']);
    }

    return response()->json(['message' => 'Image upload failed'], 400);
}    
  
public function getallActiveUsers()
{
    $user = auth()->user();

    if (!$user) {
        $userId = '';
    }else{
        $userId = $user->id;
    }
    $activeUsersWithImages = DB::table('users')
        ->join('user_images', 'users.id', '=', 'user_images.user_id')
        ->where('users.active', true)
        ->where('users.id', '!=', $userId) 
        ->select('users.id as user_id', 'users.name', 'users.created_at', 'user_images.image_path')
        ->orderBy('users.created_at', 'desc') 
        ->get();

    $activeUsersWithDetails = DB::table('users')
        ->join('user_details', 'users.id', '=', 'user_details.user_id')
        ->where('users.active', true)
        ->where('users.id', '!=', $userId)
        ->orderBy('users.created_at', 'desc') 
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
                'created_at' => Carbon::parse($imageData->created_at)->diffForHumans(), // Convert to "time ago" format
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

public function getcheckUserActiveStatus(){
    $user = auth()->user();

    if (!$user) {
        return response()->json(['message' => 'User not authenticated'], 401);
    }
    $userId = $user->id;
    $activeUserStatus = DB::table('users')
    ->where('user_id', $userId)
    ->value('active');
    return response()->json(['activeUserStatus' => $mergedData]);
}

public function getOneByOneActiveUsers(Request $request, $userId)
{
    $activeUserStatus = DB::table('users')
        ->where('id', $userId)
        ->first();


    $activeUserWithImages = DB::table('users')
        ->join('user_images', 'users.id', '=', 'user_images.user_id')
        ->where('users.id', $userId) // Filter by user ID
        ->where('users.active', true)
        ->select('users.id as user_id', 'users.name','users.email','users.marriedStatus', 'users.created_at', 'user_images.image_path', 'user_images.profilePicStatus')
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
    if ($activeUserWithImages->isNotEmpty() || $activeUserWithDetails->isNotEmpty()) {
        $profilePicImages = [];
        $otherImages = [];
        $useractive = $activeUserStatus->active;
        // Iterate over the activeUserWithImages result
        foreach ($activeUserWithImages as $imageData) {
            // Check if profilePicStatus is 1
            if ($imageData->profilePicStatus === 1) {
                // Set the 'profilePic' key to the profile picture image path
                $profilePicImages[] = $imageData->image_path;
            } else {
                // Add other images to the 'images' array
                $otherImages[] = $imageData->image_path;
            }
        }

        $imageData = $activeUserWithImages->first();
        $detailsData = $activeUserWithDetails->first();

        // Create the merged user entry
        $mergedData = [
            'user_id' => $userId,
            'name' => $activeUserStatus->name,
            'email'=> $activeUserStatus->email,
            'userActiveStatus' =>  $useractive,
            'marriedStatus'=> $activeUserStatus->marriedStatus,
            'created_at' => Carbon::parse($activeUserStatus->created_at)->diffForHumans(),
            'images' => $otherImages,
            'profilePic' => $profilePicImages,
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
                'pno'=>$detailsData->phonenum,
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

   // get user searched data 

   public function getSearchUserData(Request $request){
    $gender = $request->gender;
    $ageFrom = $request->ageFrom;
    $ageTo = $request->ageTo;
    $religion = $request->religion;
    $user = auth()->user();

    if (!$user) {
        $userId = '';
    }else{
        $userId = $user->id; 
    }
  
    $activeUsersWithDetails = DB::table('users')
    ->join('user_details', 'users.id', '=', 'user_details.user_id')
    ->where('users.active', true)
    ->where('users.id', '!=', $userId)
    ->when($gender, function ($query) use ($gender) {
        // Apply the gender filter only if $gender is not null
        $query->where('user_details.gender', $gender);
    })
    ->when($religion, function ($query) use ($religion) {
        // Apply the gender filter only if $gender is not null
        $query->where('user_details.religion', $religion);
    })
    ->when($ageFrom && $ageTo, function ($query) use ($ageFrom, $ageTo) {
        // Apply age range filter only if both $ageFrom and $ageTo are provided
        $query->whereBetween('user_details.age', [$ageFrom, $ageTo]);
    })
    ->orderBy('users.created_at', 'desc')
    ->select('users.id as user_id', 'user_details.*')
    ->get();

        if ($activeUsersWithDetails !== null && count($activeUsersWithDetails) > 0) {

    $activeUsersWithImages = DB::table('users')
        ->join('user_images', 'users.id', '=', 'user_images.user_id')
        ->where('users.active', true)
        ->where('users.id', '!=', $userId) 
        ->select('users.id as user_id', 'users.name', 'users.created_at', 'user_images.image_path')
        ->orderBy('users.created_at', 'desc') 
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
                'created_at' => Carbon::parse($imageData->created_at)->diffForHumans(), // Convert to "time ago" format
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
}else{
    $mergedData = [];
}
    // Return the merged data as a JSON response
    return response()->json(['activeUsersWithImagesAndDetails' => $mergedData]);

   }
}
