<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Resources\ProductCollection;
use App\Models\User;

use App\Http\Requests\Product\Store;
use App\Http\Requests\Product\Update;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = new ProductCollection(Product::paginate(10));
        // dd($product);

        return Inertia::render('Product/Index',[
            'product' => $product
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Product/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = $request->validated();
        $product = Product::create($data);
        return redirect()->route('product.index')->with([
            'message' => 'Product successfully created',
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        return Inertia::render('Product/Edit',[
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Product $product)
    {
        $data = $request->validated();
        $product->update($data);

        return redirect()->route('product.index')->with([
            'message' => "Product updated successfully",
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('product.index', [
            'message' => 'Product deleted successfully',
            'type' => 'success'
        ]);
    }
}
