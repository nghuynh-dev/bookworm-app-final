import { cartConstants } from "../constants";
const { ADD_TO_CART ,POST_CART_TO_DB,  ADD_QUANTITY_CART, SUB_QUANTITY_CART } = cartConstants
const CART_STORAGE = process.env.MIX_CART_STORAGE

const cartStore = JSON.parse(localStorage.getItem(CART_STORAGE))

const initCart = {
    cartListReducer: cartStore === null ? []: cartStore,
    alertCart: {
        message: '',
        show: false
    }
}

const checkBookIdIntoCart = (id) => {
    const carts = JSON.parse(localStorage.getItem(CART_STORAGE))
    if(carts === null){
        return true
    }
    else {
        let check = true
        carts.map((item) => {
            if (item.id === id) {
                check = false
            }
        })
        if (check) {
            return true
        }
        else {
            return false
        }
    }
}

const cartReducer = (state = initCart, action) => {
    switch (action.type){
        case ADD_TO_CART:
            let carts = JSON.parse(localStorage.getItem(CART_STORAGE))
            const book = action.payload.data
            if (checkBookIdIntoCart(book.id)) {
                if (carts === null) {
                    carts = []
                }
                carts.push(book)
                localStorage.setItem(CART_STORAGE, JSON.stringify(carts))
            }
            else {
                // console.log('ton tai')
                carts.map((item) => {
                    if (item.id === book.id) {
                        // console.log('check')
                        item.quantity += book.quantity
                    }
                })
                // console.log(carts)
                localStorage.setItem(CART_STORAGE, JSON.stringify(carts))
            }

            return{
                ...state,
                cartListReducer: carts
            }
        case ADD_QUANTITY_CART:
            let cartsS = JSON.parse(localStorage.getItem(CART_STORAGE))
            cartsS.map((cart) => {
                console.log(cartsS)
                if(cart.id === action.payload.data){
                    if (cart.quantity <= 7){
                        cart.quantity +=1
                    }
                }
            })
            localStorage.setItem(CART_STORAGE, JSON.stringify(cartsS))

            return{
                ...state,
                cartListReducer: cartsS
            }
        case SUB_QUANTITY_CART:
            let cartsSs = JSON.parse(localStorage.getItem(CART_STORAGE))
            cartsSs.map((cart, index) => {
                // console.log(cartsSs)
                if(cart.id === action.payload.data){
                    if (cart.quantity >=1){
                        cart.quantity -=1
                    }
                    if(cart.quantity == 0){
                        cartsSs.splice(index, 1)
                        // console.log(cartsSs)
                    }
                }
            })
            localStorage.setItem(CART_STORAGE, JSON.stringify(cartsSs))
            return{
                ...state,
                cartListReducer: cartsSs
            }
        case POST_CART_TO_DB:
            localStorage.setItem(CART_STORAGE, JSON.stringify([]))
            return{
                ...state,
                alertCart: {
                    ...state.alertCart,
                    message: action.payload.data.message,
                    show: action.payload.data.show
                },
                cartListReducer: []
            }
        default:
            return state
    }
}

export default cartReducer;
