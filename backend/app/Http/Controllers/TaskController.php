<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \App\Http\Resources\Task
     */
    public function index()
    {
        return new \App\Http\Resources\Task(Task::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return \App\Http\Resources\Task
     */
    public function store(Request $request)
    {
        $data = $request->validate(['todo.title' => ['required']]);

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
}
