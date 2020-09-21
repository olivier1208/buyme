<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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
        return (bool)$this->users()->count();
    }

    /**
     * @return mixed
     */
    public function getUsersAttribute()
    {
        return $this->users()->get();
    }

    /**
     * @return BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(User::class, 'user_task');
    }
}
