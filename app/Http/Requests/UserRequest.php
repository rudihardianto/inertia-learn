<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UserRequest extends FormRequest
{
   /**
    * Determine if the user is authorized to make this request.
    *
    * @return bool
    */
   public function authorize()
   {
      return true;
   }

   /**
    * Get the validation rules that apply to the request.
    *
    * @return array
    */
   public function rules()
   {
      return [
         'username' => ['unique:users', 'required', 'alpha_num'],
         'email'    => ['unique:users', 'required', 'email'],
         'password' => ['required', Password::defaults()],
         'name'     => ['required'],
         'location' => ['required'],
      ];
   }
}
