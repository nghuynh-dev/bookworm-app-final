<?php

namespace App\Repositories\Order;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;

class OrderRepository
{
    public function store(Request $request)
    {
        if ($request->method('POST')) {
            try {
                DB::transaction(
                    function () {
                        $id = 1;
                        $id_item = 0;

                        $number = DB::table('order')->max('id');
                        if (!is_null($number)) {
                            $id = $number + 1;
                        }

                        $max_id = DB::table('order_item')->max('id');
                        if (!is_null($max_id)) {
                            $id_item = $max_id + 1;
                        }

                        $data = request()->validate([
                            'book' => ['required', 'array'],
                        ]);
                        $total_price = 0;
                        foreach ($data['book'] as $item) {
                            $total_price += ($item['quantity'] * $item['final_price']);
                        };
                        DB::table('order')->insert([
                            'id' => $id,
                            'user_id' => 1,
                            'order_date' => Carbon::now()->timezone('Asia/Ho_Chi_Minh'),
                            'order_amount' => $total_price
                        ]);
                        foreach ($data['book'] as $item) {
                            DB::table('order_item')->insert([
                                'id' => $id_item,
                                'order_id' => $id,
                                'book_id' => $item['id'],
                                'quantity' => $item['quantity'],
                                'price' => (float)$item['final_price']
                            ]);
                            $id_item++;
                        };
                    },
                    4
                );
                return response()->json([
                    'message' => 'Order created successfully'
                ], ResponseAlias::HTTP_CREATED);
            } catch (\Throwable $th) {
                return response()->json([
                    'error' => 'Server error',
                ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR);
            }
        }
    }
}
