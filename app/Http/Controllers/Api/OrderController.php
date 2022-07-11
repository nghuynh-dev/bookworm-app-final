<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Repositories\Order\OrderRepository;
use Illuminate\Http\Request;


class OrderController extends Controller
{
    protected $orderRepository;
    public function __construct(OrderRepository $orderRepository)
    {
        $this->orderRepository = $orderRepository;
    }
    public function store(Request $request)
    {
        return $this->orderRepository->store($request);
    }
}
