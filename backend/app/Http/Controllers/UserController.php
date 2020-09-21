<?php

namespace App\Http\Controllers;

use App\Task;
use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * @param Request $request
     * @return \App\Http\Resources\User
     */
    public function index(Request $request)
    {
        return new \App\Http\Resources\User(User::where('id', '!=', $request->user()->id)->get());
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
