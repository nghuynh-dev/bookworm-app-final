<?php

namespace App\Repositories\Review;

use App\Http\Resources\BookResource;
use App\Http\Resources\ReviewBookCollection;
use App\Models\Book;
use App\Models\Review;

class ReviewRepository
{
    public function getBookReview($id)
    {
        $bookDetail = Book::detail()->findOrFail($id);
        $bookDetail = new BookResource($bookDetail);
        $reviews = Book::findOrFail($id)->reviews()->paginate(4);
        $reviews = new ReviewBookCollection($reviews);

        $group = Review::detail($id)->get();

        return response()->json([
            'book' => $bookDetail,
            'count' => $group,
            'reviews' => $reviews,
        ]);
    }
}
