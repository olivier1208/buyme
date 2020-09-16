<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class UserTaskController extends Controller
{
    /**
     * @param Request $request
     * @param Task $task
     * @return mixed
     */
    public function store(Request $request, Task $task)
    {
        return $request->user()->tasks()->attach($task);
    }

    /**
     * @param Request $request
     * @param Task $task
     * @return mixed
     */
    public function destroy(Request $request, Task $task)
    {
        return $request->user()->tasks()->detach($task);
    }
}
