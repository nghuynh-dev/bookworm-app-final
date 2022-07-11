import { Alert, Modal, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {isError, isNull} from "lodash";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addQuantityCart, postCartToDb, subQuantityCart} from "../../../actions/cart.action";

export default function CartListComponent(){
    const dataCarts = useSelector(state => state.cartReducer.cartListReducer)
    const messageAlert = useSelector(state => state.cartReducer.alertCart.message)
    const showAlert = useSelector(state => state.cartReducer.alertCart.show)
    const dispatch = useDispatch()

    const total_price = () => {
        let total = 0
        dataCarts.map((cart) => {
            total += cart.final_price * cart.quantity
        })
        return total
    }
    const handlePlaceOrder = () => {
        let data = []
        data = dataCarts.map((cart) => {
            return {
                id:cart.id,
                quantity:cart.quantity,
                final_price:cart.final_price
            }
        })
        dispatch(postCartToDb({book: data}))
    }

    console.log(showAlert)
    const temp = () => {
        return dataCarts.map((cart) => {
            if (isNull(cart.img) || (cart.img.length == 0)) {
                cart.img = 'book5'
            }
            return(
                <tr key={cart.id}>
                    <td className="book-title-cart pl-4 py-4">
                        <Link to={'/detail/' + cart.id} target="_blank">
                            <img src={"./assets/bookcover/" + cart.img + ".jpg"} alt={cart.title} width="120rem" height="160rem" />
                        </Link>
                    </td>
                    <td>
                        <div className="h4">
                            {cart.title}
                        </div>
                        <div>
                            {cart.author}
                        </div>
                    </td>
                    <td>
                        {cart.final_price == cart.book_price ? (
                            <div className="h5"><b>${cart.book_price}</b></div>
                        ) : (
                            <>
                                <div className="h5"><b>${cart.final_price}</b></div>
                                <div><del>${cart.book_price}</del></div>
                            </>
                        )}

                    </td>
                    <td>
                        <div className="quantity-item-cart">
                            <button type="button" className="btn btn-secondary"
                                    id={'btn-sub-quantity-cart-' + cart.id}
                                    onClick={() => dispatch(subQuantityCart(cart.id))}
                            >
                                <i className="fa fa-minus"></i>
                            </button>
                            <div className="quantity-number-cart" id={'quantity-cart-' + cart.id}>{cart.quantity}</div>
                            <button type="button" className="btn btn-secondary"
                                    id={'btn-add-quantity-cart-' + cart.idBook}
                                    onClick={() => dispatch(addQuantityCart(cart.id))}
                            >
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </td>
                    <td>
                        <div className="h5"><b>${(cart.final_price * cart.quantity).toFixed(2)}</b></div>
                    </td>
                </tr>
            )
        })
    }

    return(
        <div className="mx-5 mb-4">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 list-cart">
                    <table className="table table-responsive-lg border">
                        <thead>
                        <tr>
                            <th scope="col" colSpan="2" className="pl-4">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {temp()}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 place-order">
                    <div className="card">
                        <div className="card-header text-center">
                            <span className="h5"><b>Cart Totals</b></span>
                        </div>
                        <div className="card-body px-5">
                            <h4 className="card-title my-4"><b>${total_price().toFixed(2)}</b></h4>
                            <button onClick={() => handlePlaceOrder()} type="button" className="btn btn-secondary btn-place-order mb-3" id="btn-place-order">
                                <b>Place order</b>
                            </button>
                        </div>
                    </div>
                    {/*<Modal>*/}
                    {/*    <Modal.Header closeButton>*/}
                    {/*        <Modal.Title>Place order</Modal.Title>*/}
                    {/*    </Modal.Header>*/}
                    {/*    <Modal.Body>Are you sure to order?</Modal.Body>*/}
                    {/*    <Modal.Footer>*/}
                    {/*        <Button variant="outline-dark" >*/}
                    {/*            Close*/}
                    {/*        </Button>*/}
                    {/*        <Button variant="secondary" >*/}
                    {/*            Order*/}
                    {/*        </Button>*/}
                    {/*    </Modal.Footer>*/}
                    {/*</Modal>*/}
                    {showAlert ? (
                        <Alert variant="secondary" className="mt-5 text-center">
                            <Alert.Heading>Order Success</Alert.Heading>
                            Go back to <Alert.Link as={Link} to="/">Home Page</Alert.Link> after  seconds
                        </Alert>
                    ):<></>}
                    {/*{showError && !isNull(isError) ? (*/}
                    {/*    <Alert variant="warning" className="mt-5 text-center">*/}
                    {/*        <Alert.Heading>Order Failed</Alert.Heading>*/}
                    {/*    </Alert>*/}
                    {/*):<></>}*/}
                </div>
            </div>
        </div>
    )
}
