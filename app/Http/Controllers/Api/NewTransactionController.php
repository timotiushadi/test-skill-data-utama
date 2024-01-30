<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Transaction;

class NewTransactionController extends Controller
{
    public function index()
    {
        //get posts
        $posts = Transaction::latest()->paginate(5);

        //return collection of posts as a resource
        return new NewTransactionResource(true, 'new transaction', $posts);
    }
}
