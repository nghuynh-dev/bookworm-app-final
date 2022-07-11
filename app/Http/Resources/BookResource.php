<?php

namespace App\Http\Resources;


use App\Models\Book;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class BookResource extends JsonResource
{


    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public function toArray($request)
    {
        $sub_price = round($this->book_price - $this->discount_price, 2);
        if (!is_null($this->discount_end_date)) {
            if ( !(date('Y-m-d') >= $this->discount_start_date and date('Y-m-d') <= $this->discount_end_date) ) {
                $this->discount_price = $this->book_price;
                $sub_price = 0;
            }
        }
        else {
            if ( !(date('Y-m-d') >= $this->discount_start_date) or is_null($this->discount_start_date) ) {
                $this->discount_price = $this->book_price;
                $sub_price = 0;
            }
        }
        return [
            'book_id' => $this->id,
            'book_title' => $this->book_title,
            'book_summary' => $this->book_summary,
            'book_price' => $this->book_price,
            'book_cover_photo' => $this->book_cover_photo,
            'sub_price' => $sub_price,
            'category' => new CategoryResource($this->category),
            'author' => new AuthorResource($this->author),
            'discount_price' => $this->discount_price,
            'date_start' => $this->discount_start_date,
            'date_end' => $this->discount_end_date,
            'final_price' => $this->discount_price,
        ];

    }
}
