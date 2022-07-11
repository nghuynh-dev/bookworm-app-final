<?php

namespace App\Models;

use App\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    use Filterable;
    public $timestamps = false;
    protected $table = 'review';

    protected $filterable = [
        'sort',
        'star'
    ];
    protected $casts = [
        'rating_start' => 'integer',
    ];
    public function scopeDetail($query, $id)
    {
        return $query
            ->where('book_id', $id)
            ->selectRaw("count(rating_start) as count_star")
            ->selectRaw("ROUND(AVG(CAST(rating_start as INT)),2) as avg_star");
    }
    public function sortDesc($query)
    {
        return $query
            ->orderBy('review_date', 'DESC');
    }
    public function sortAsc($query)
    {
        return $query
            ->orderBy('review_date', 'ASC');
    }
    public function filterStar($query, $value)
    {
        if (is_numeric($value)) {
            if ($value == 0) {
                return $query
                    ->whereRaw(('CAST(rating_start as INT)'), '>=', $value);
            }
            return $query
                ->whereRaw(('CAST(rating_start as INT)'), '=', $value);
        }
        return $query;
    }
}
