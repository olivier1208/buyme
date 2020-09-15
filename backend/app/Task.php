<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    /**
     * @var array
     */
    protected $guarded = [];

    /**
     * @var array
     */
    protected $casts = ['done' => 'boolean'];

    /**
     * The users that belong to the task.
     */
    public function users()
    {
        return $this->belongsToMany('App\User', 'user_task');
    }
}
