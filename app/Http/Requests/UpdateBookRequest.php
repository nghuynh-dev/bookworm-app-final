<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class UpdateBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'category_id' => 'required',
            'author_id' => 'required',
            'book_title' => 'required',
            'book_summary' => 'required',
            'book_price' => 'required',
            'book_cover_photo' => 'required',
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $response = new Response([
            'errors'=> $validator->errors(),
        ], Response::HTTP_UNPROCESSABLE_ENTITY);
        throw (new ValidationException($validator, $response));
    }
}
