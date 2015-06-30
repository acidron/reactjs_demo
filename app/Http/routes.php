<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/news', 'MessageCtrl@index');
Route::get('/news/{page}', 'MessageCtrl@indexPage')->where(['page' => '\d+']);
Route::post('/news', 'MessageCtrl@store');
Route::delete('/news/{id}', 'MessageCtrl@destroy')->where(['id' => '\d+']);


Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');
Route::post('auth/register', 'Auth\AuthController@postRegister');