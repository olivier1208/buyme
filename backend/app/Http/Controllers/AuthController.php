<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    /**
     * @param Request $request
     * @return mixed
     * @throws ValidationException
     */
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->get('username'))->first();

        if (! $user || ! Hash::check($request->get('password'), $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $data = [
            "user" => $user,
            "access_token" => $user->createToken('web')->plainTextToken,
        ];

        return new JsonResponse($data);
    }

    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users,email',
            'address' => 'required',
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
        ]);

        $data = $request
            ->merge(['password' => Hash::make($request->get('password'))])
            ->all(['first_name', 'last_name', 'email', 'address', 'password'])
        ;
        $user = User::create($data);

        return new JsonResponse([
            "user" => $user
        ]);
    }

    public function logout()
    {

    }
}
