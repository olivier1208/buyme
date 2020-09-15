<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return User[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return new \App\Http\Resources\User(User::all());
    }
}
