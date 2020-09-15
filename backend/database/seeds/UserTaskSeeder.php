<?php

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
        // Populate roles
        factory(App\Task::class, 20)->create();

        // Populate users
        factory(App\User::class, 50)->create();

        // Get all the roles attaching up to 3 random roles to each user
        $tasks = App\Task::all();

        // Populate the pivot table
        App\User::all()->each(function ($user) use ($tasks) {
            $user->tasks()->attach($tasks->random(rand(1, 10))->pluck('id')->toArray());
        });
    }
}
