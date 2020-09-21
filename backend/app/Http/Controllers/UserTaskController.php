<?php

namespace App\Http\Controllers;

use App\Task;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserTaskController extends Controller
{
    /**
     * @param Task $task
     * @param User $user
     * @return JsonResponse
     */
    public function store(Task $task, User $user)
    {
        $user->sharedTasks()->attach($task);
        return new JsonResponse("Success");
    }

    /**
     * @param Task $task
     * @param User $user
     * @return JsonResponse
     */
    public function destroy(Task $task, User $user)
    {
        $user->sharedTasks()->detach($task);
        return new JsonResponse("Success");

    }
}
