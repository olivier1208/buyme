<?php

namespace App\Http\Controllers;

use App\Task;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \App\Http\Resources\Task
     */
    public function index(Request $request)
    {
        $ownerTasks = $request->user()->tasks;
        $sharedTasks = $request->user()->sharedTasks;

        return new \App\Http\Resources\Task($ownerTasks->merge($sharedTasks));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \App\Http\Resources\Task
     */
    public function store(Request $request)
    {
        $data = $request->validate(['todo.title' => ['required'], 'todo.owner_id' => ['required']]);

        return new \App\Http\Resources\Task(Task::create($data['todo']));
    }

    /**
     * Display the specified resource.
     *
     * @param Task $task
     * @return \App\Http\Resources\Task
     */
    public function show(Task $task)
    {
        return new \App\Http\Resources\Task($task);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Task $task
     * @return \App\Http\Resources\Task
     */
    public function update(Request $request, Task $task)
    {
        $data = $request->validate(['todo.title' => ['nullable'], 'todo.done' => ['nullable', 'boolean']]);

        $task->update($data['todo']);

        return new \App\Http\Resources\Task($task);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Task $task
     * @return JsonResponse
     * @throws \Exception
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return new JsonResponse(['message' => 'Task #' . $task->id . ' has been deleted successfully']);
    }

    /**
     * @param Request $request
     * @param Task $task
     * @return mixed
     */
    public function attach(Request $request, Task $task)
    {
        return $request->user()->tasks()->attach($task);
    }

    /**
     * @param Request $request
     * @param Task $task
     * @return mixed
     */
    public function detach(Request $request, Task $task)
    {
        return $request->user()->tasks()->detach($task);
    }
}
