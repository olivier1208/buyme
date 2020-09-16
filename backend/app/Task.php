<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasMany;

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

    protected $appends = ['is_shared', 'users'];

    /**
     * @return bool
     */
    public function getIsSharedAttribute()
    {
        $tasksCount = Task::whereHas('users', function (Builder $query) {
            $query->where('owner_id', 'like', $this->owner_id);
        })->count();
        return (bool)$tasksCount;
    }

    /**
     * @return mixed
     */
    public function getUsersAttribute()
    {
        return User::whereHas('tasks', function (Builder $query) {
            $query->where('id', 'like', $this->id);
        })->get();
    }

    /**
     * @return HasMany
     */
    public function users()
    {
        return $this->hasMany('App\User', 'id');
    }
}
