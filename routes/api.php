<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('products', 'Api\V1\ProductsController@index');

Route::get('products/{product}', 'Api\V1\ProductsController@show');

Route::post('products','Api\V1\ProductsController@store');

Route::put('products/{product}','Api\V1\ProductsController@update');

Route::delete('products/{product}', 'Api\V1\ProductsController@delete');
