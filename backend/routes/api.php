<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserTaskController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);

Route::apiResource('todos', 'TaskController')
    ->parameters([
    'todos' => 'task'
])
    ->middleware('auth:sanctum')
;
Route::apiResource('users', 'UserController');

Route::post('todos/{task}/users', [UserTaskController::class, 'store']);
Route::delete('todos/{task}/users', [UserTaskController::class, 'destroy']);
