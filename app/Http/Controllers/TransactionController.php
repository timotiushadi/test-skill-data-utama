<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Transaction;
use App\Http\Resources\TransactionCollection;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class TransactionController extends Controller
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
        $transaction = new TransactionCollection(Transaction::paginate(10));
        // dd($transaction);

        return Inertia::render('Transaction/Index',[
            'transaction' => $transaction
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }

    public function addTransaction(Request $request)
    {
        // Validasi input
        $validator = Validator::make($request->all(), [
            'quantity' => '5',
            'product_id' => '1',
        ]);

        if ($validator->fails()) {
            return response()->json(['code' => '40001', 'message' => 'Invalid input'], 400);
        }

        $price = $this->getPriceByProductId($request->input('product_id'));

        $paymentAmount = $request->input('quantity') * $price;

        $referenceNo = $this->getReferenceNo();

        $response = [
            'quantity' => $request->input('quantity'),
            'product_id' => $request->input('product_id'),
            'price' => $price,
            'payment_amount' => $paymentAmount,
            'reference_no' => $referenceNo,
        ];

        // Response sukses
        return response()->json(['code' => '20000', 'data' => $response], 200);
    }

    private function getPriceByProductId($productId)
    {

    }

    private function getReferenceNo()
    {
        $response = Http::withHeaders([
            'X-API-KEY' => 'DATAUTAMA',
            'X-SIGNATURE' => hash('sha256', 'POST:DATAUTAMA'),
        ])->post('http://tes-skill.datautama.com/test-skill/api/v1/transactions');

        $referenceNo = $response->json('reference_no');

        return $referenceNo;
    }
}
