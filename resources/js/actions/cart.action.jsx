import {exceptionConstants, cartConstants} from "../constants";
import BookService from "../services/book.service";
import CartService from "../services/cart.service";

const { BAD_REQUEST, SUCCESS, CREATED } = exceptionConstants
const { ADD_TO_CART, POST_CART_TO_DB, ADD_QUANTITY_CART, SUB_QUANTITY_CART } = cartConstants

export const addToCart = (data) => {
    return async function (dispatch) {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                data: data
            }

        })
    }
}
export const addQuantityCart = (id) => {
    return async function (dispatch) {
        dispatch({
            type: ADD_QUANTITY_CART,
            payload: {
                data: id
            }

        })
    }
}
export const subQuantityCart = (id) => {
    return async function (dispatch) {
        dispatch({
            type: SUB_QUANTITY_CART,
            payload: {
                data: id
            }
        })
    }
}

export const postCartToDb = (data) => {
    return async function (dispatch) {
        const response = await CartService.postCartToDb(data)
        const message = response.data.message
        const code = response.code
        if (code === CREATED) {
            dispatch({
                type: POST_CART_TO_DB,
                payload: {
                    data: {
                        message: message,
                        show: true
                    }
                }
            })
        }
    }
}


