<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\Filterable;



class Book extends Model
{
    use HasFactory;
    use Filterable;

    protected $filterable = [
        'sort',
        'category',
        'author',
        'star'
    ];

    public $timestamps = false;
    protected $table = 'book';

    public function author()
    {
        return $this->belongsTo(Author::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function discounts()
    {
        return $this->hasOne(Discount::class);
    }
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
    public function orderItems()
    {
        return $this->hasMany(Review::class);
    }

    public function scopeDetail($query)
    {
        return $query
            ->leftJoin('review', 'review.book_id', 'book.id')
            ->leftJoin('discount', 'discount.book_id', 'book.id')
            ->groupBy('book.id', 'discount.id')
            ->select(
                'book.id',
                'book.book_title',
                'book.book_summary',
                'book.book_cover_photo',
                'book.book_price',
                'book.category_id',
                'book.author_id',
                'discount.discount_price',
                'discount_start_date',
                'discount_end_date'
            );
    }
    //sale by sub price
    public function sortSale($query)
    {
        return $query
            ->orderByRaw('CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date) THEN book_price - discount_price
                    WHEN (discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date ) ) THEN book_price - discount_price
                    ELSE 0
                    END DESC');
    }
    // average rating star and lowest final price
    public function sortRecommend($query)
    {
        return $query
            ->havingRaw("COALESCE(AVG(CAST(rating_start as INT)), 0) >= 0")
            ->orderByRaw("COALESCE(AVG(cast(rating_start as INT)), 0) desc")
            ->orderByRaw('CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date) THEN discount_price
                    WHEN (discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date ) ) THEN discount_price
                    ELSE book_price
                    END ASC');
    }
    //most review and lowest final price
    public function sortPopular($query)
    {
        return $query
            ->orderByRaw('COUNT(CAST(review.rating_start as INT)) DESC')
            ->orderByRaw('CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date) THEN discount_price
                    WHEN (discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date ) ) THEN discount_price
                    ELSE book_price
                    END ASC');
    }
    public function sortDesc($query)
    {
        return $query
            ->orderByRaw('CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date) THEN discount_price
                    WHEN (discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date ) ) THEN discount_price
                    ELSE book_price
                    END DESC');
    }
    public function sortAsc($query)
    {
        return $query
            ->orderByRaw('CASE
                    WHEN (discount_end_date IS NULL AND DATE(NOW()) >= discount_start_date) THEN discount_price
                    WHEN (discount_end_date IS NOT NULL AND ( DATE(NOW()) >= discount_start_date AND DATE(NOW()) <= discount_end_date ) ) THEN discount_price
                    ELSE book_price
                    END ASC');
    }
    public function filterCategory($query, $value)
    {
        return $query->where('book.category_id', $value);
    }
    public function filterAuthor($query, $value)
    {
        return $query->where('book.author_id', $value);
    }
    public function filterStar($query, $value)
    {
        if (is_numeric($value)) {
            return $query
                ->havingRaw("COALESCE(AVG(CAST(rating_start as INT)), 0) >= ?", [$value]);
        }
    }
}
