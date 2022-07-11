import { exceptionConstants, shopConstants } from "../constants";
import ShopService from "../services/shop.service";
const { BAD_REQUEST, SUCCESS } = exceptionConstants
const { GET_AUTHOR, GET_SHOW, GET_BOOK_ID, GET_CATEGORY, GET_STAR, GET_BOOK_DEFAULT, UPDATE_FILTER_PARAMS, UPDATE_LAST_PAGINATION, UPDATE_CURRENT_PAGINATION } = shopConstants

export const updateQueryParams = (data) => {
    return async function (dispatch) {
        dispatch({
            type: UPDATE_FILTER_PARAMS,
            payload: {
                data: data,
            },
        })
    }
}
export const updateLastPage = (last_page) => {
    return async function (dispatch) {
        dispatch({
            type: UPDATE_LAST_PAGINATION,
            payload: {
                data: last_page,
            },
        })
    }
}

export const updateCurrentPage = (current_page) => {
    return async function (dispatch) {
        dispatch({
            type: UPDATE_CURRENT_PAGINATION,
            payload: {
                data: current_page,
            },
        })
    }
}

export const getBookDefault = (query_string) => {
    return async function (dispatch) {
        const response = await ShopService.getBookDefault(query_string)
        const BookDefault = response.data
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_BOOK_DEFAULT,
                payload: {
                    data: BookDefault,
                },
            })
        }
        return response
    }
}


export const getAuthor = () => {
    return async function (dispatch) {
        const response = await ShopService.getType()
        const author = response.data.authors
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_AUTHOR,
                payload: {
                    data: author,
                },
            })
        }
        return response
    }
}
export const getCategory = () => {
    return async function (dispatch) {
        const response = await ShopService.getType()
        const category = response.data.categories
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_CATEGORY,
                payload: {
                    data: category,
                },
            })
        }
        return response
    }
}

export const getStar = () => {
    return async function (dispatch) {
        const response = await ShopService.getType()
        const star = response.data.star
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_STAR,
                payload: {
                    data: star,
                },
            })
        }
        return response
    }
}

export const getBookById = (id) => {
    return async function (dispatch) {
        const response = await ShopService.getBookById(id)
        const bookId = response.data
        const code = response.code
        if (code === SUCCESS) {
            dispatch({
                type: GET_BOOK_ID,
                payload: {
                    data: bookId,
                },
            })
        }
        return response
    }
}

