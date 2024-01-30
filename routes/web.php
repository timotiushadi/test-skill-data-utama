<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TransactionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::redirect('/', '/login');

Route::middleware(['auth','verified'])->group(function () {
    Route::resource('/home', DashboardController::class);
    Route::resource('/product', ProductController::class);

    Route::post('/add_transaction', [TransactionController::class, 'addTransaction'])->name('addTransaction');
    Route::resource('/transaction', TransactionController::class);
});

require __DIR__.'/auth.php';
