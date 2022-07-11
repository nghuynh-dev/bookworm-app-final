<?php

namespace App\Repositories\Book;

use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;
use App\Http\Resources\ReviewBookCollection;
use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;



class BookRepository
{
    public function getBooksAll()
    {
        $books = Book::detail()->paginate(config('app.perPage'));
        $books = new BookCollection($books);

        return response()->json([
            "message" => "all books",
            "data" => $books
        ], 200);
    }
    public function getBookDetail($id)
    {
        $book = Book::detail()->findOrFail($id);
        $book = new BookResource($book);

        $reviews = Book::findOrFail($id)->reviews()->paginate(4);
        $reviews = new ReviewBookCollection($reviews);

        //        $group = Review::detail($id)->get();

        return response()->json([
            "books" => $book,
            //            'count', $group,
            "reviews" => $reviews
        ], 200);
    }
    public function getBookFilter(Request $request)
    {
        $params = $request->all();
        //        dd($params);
        if (!key_exists('show', $params)) {
            return response()->json([
                'error' => 'Request is missing attribute'
            ], 421);
        }
        $filterBooks = Book::detail()->filter($params)->paginate($params['show'])->appends(request()->query());
        $books = new BookCollection($filterBooks);

        return response()->json($books, 200);
    }

    public function getType()
    {
        $categories = Category::orderBy('category_name')->get();
        $authors = Author::orderBy('author_name')->get();
        $stars = [1, 2, 3, 4, 5];
        return response()->json([
            'categories' => $categories,
            'authors' => $authors,
            'star' => $stars
        ],  200);
    }
}
