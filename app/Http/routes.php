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
Route::get('', function() {
	return View('index');
});
Route::get('/messages', 'MessageCtrl@index');
Route::get('/messages/{page}', 'MessageCtrl@indexPage')->where(['page' => '\d+']);
Route::post('/messages', 'MessageCtrl@store');
Route::delete('/messages/{id}', 'MessageCtrl@destroy')->where(['id' => '\d+']);
Route::put('/profile', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {
	$firstname = $request->input('firstname');
	$lastname  = $request->input('lastname');
	$profile = App\User::findOrFail(Auth::id());
	$profile->firstname = $firstname;
	$profile->lastname = $lastname;
	$profile->save();
	return ['changed' => true];
}]);


Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/isLogin', function() {
	if (Auth::check()) {
		$user = Auth::user();
		return [
			'signed' => true,
			'firstname' => $user->firstname,
			'lastname' => $user->lastname,
		];
	} else {
		return ['signed' => false];	
	}
});
Route::get('auth/logout', 'Auth\AuthController@getLogout');
Route::post('auth/register', 'Auth\AuthController@postRegister');