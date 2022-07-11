<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\Review\ReviewRepository;

class ReviewController extends Controller
{
    protected $reviewRepository;
    public function __construct(ReviewRepository $reviewRepository)
    {
        $this->reviewRepository = $reviewRepository;
    }
    public function getBookReview($id)
    {
        return $this->reviewRepository->getBookReview($id);
    }
}
