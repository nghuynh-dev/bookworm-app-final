<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\ReviewController;
use App\Http\Controllers\Api\OrderController;


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

Route::prefix('books')->group(function () {
    Route::get('/',[BookController::class,'index']);
    Route::get('/detail/{id}',[BookController::class,'getBookDetail']);
    Route::get('/filter',[BookController::class,'getBookFilter']);
    Route::get('/type',[BookController::class,'getType']);
});

Route::get('reviews/{id}', [ReviewController::class,'getBookReview']);
Route::resource('orders', OrderController::class)->only([
    'store'
]);



