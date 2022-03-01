<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
   public function index()
   {
      return inertia('Users/Index', [
         'users'   => User::latest()->paginate(10),
         'addUser' => Auth::user()->can('add_user'),
      ]);
   }

   public function store(UserRequest $request)
   {
      $this->authorize('add_user', Auth::user());
      $attributes = $request->toArray();
      User::create($attributes);

      return back()->with([
         'type'    => 'success',
         'message' => 'User created successfully',
      ]);

   }

   public function show($id)
   {
      //
   }

   public function update(UserRequest $request, User $user)
   {
      $attributes = $request->toArray();
      $user->update($attributes);

      return back()->with([
         'type'    => 'success',
         'message' => 'User created updated successfully',
      ]);
   }

   public function destroy(User $user)
   {
      $user->delete();

      return back()->with([
         'type'    => 'success',
         'message' => 'User deleted successfully',
      ]);
   }
}