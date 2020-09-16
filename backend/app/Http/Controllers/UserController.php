<?php

namespace App\Http\Controllers;

use App\Task;
use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \App\Http\Resources\User
     */
    public function index()
    {
        return new \App\Http\Resources\User(User::all());
    }

    public function usersTask(Request $request)
    {
        return Task::whereHas('users', function (Builder $query) {
            $query->where('owner_id', 'like', $this->id);
        })->get();
    }

    /**
     * @param User $user
     * @return \App\Http\Resources\User
     */
    public function show(User $user)
    {
        return new \App\Http\Resources\User($user);
    }
}
