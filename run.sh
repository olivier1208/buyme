#!/usr/bin/env bash
(cd backend;php artisan serve) & (echo $PWD) & (cd ./frontend; echo $PWD; ember serve)