<?php

use App\User;
use Illuminate\Database\Seeder;

class UserTaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 10)->create();

        $tasks = factory(App\Task::class, 50)->create();

        App\User::all()->each(function ($user) use ($tasks) {
            $user->sharedTasks()->sync($tasks->random(rand(1, 10))->pluck('id')->toArray());
        });
    }
}
