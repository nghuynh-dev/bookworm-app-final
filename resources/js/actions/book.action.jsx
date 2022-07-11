import { bookConstants, exceptionConstants } from "../constants";
import BookService from "../services/book.service";
const { BAD_REQUEST, SUCCESS } = exceptionConstants
const { GET_BOOK_POPULAR, GET_BOOK_RECOMMEND, GET_BOOK_BANNER } = bookConstants

export const getBookBanner = () => {
    return async function (dispatch) {
        const response = await BookService.getBookBanner()
        const BookBanner = response.data.data
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_BOOK_BANNER,
                payload: {
                    data: BookBanner,
                },
            })
        }
        return response
    }
}
export const getBookRecommend = () => {
    return async function (dispatch) {
        const response = await BookService.getBookRecommend()
        const BookRecommend = response.data.data
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_BOOK_RECOMMEND,
                payload: {
                    data: BookRecommend,
                },
            })
        }
        return response
    }
}

export const getBookPopular = () => {
    return async function (dispatch) {
        const response = await BookService.getBookPopular()
        const BookPopular = response.data.data
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_BOOK_POPULAR,
                payload: {
                    data: BookPopular,
                },
            })
        }
        return response
    }
}
