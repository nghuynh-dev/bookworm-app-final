import MainTitleComponent from "../components/cart/title";
import CartListComponent from "../components/cart/list";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {addToCart, renderCart} from "../actions/cart.action";

export default function Cart(){
    return (
        <div className="wrapper-cart">
            <MainTitleComponent />
            <CartListComponent />
        </div>
    )
}
