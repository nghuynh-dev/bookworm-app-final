<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Book\BookRepository;
use Illuminate\Http\Request;

class BookController extends Controller
{
    protected $bookRepository;
    public function __construct(BookRepository $bookRepository)
    {
        $this->bookRepository = $bookRepository;
    }
    public function index()
    {
        return $this->bookRepository->getBooksAll();
    }
    //    public function getBooksSale(){
    //        return $this->bookRepository->getBooksSale();
    //    }
    //    public function getBooksRecommend(){
    //        return $this->bookRepository->getBooksRecommend();
    //    }
    //    public function getBooksPopular(){
    //        return $this->bookRepository->getBooksPopular();
    //    }
    public function getBookDetail($id)
    {
        return $this->bookRepository->getBookDetail($id);
    }
    public function getBookFilter(Request $request)
    {
        return $this->bookRepository->getBookFilter($request);
    }
    public function getType()
    {
        return $this->bookRepository->getType();
    }
}
