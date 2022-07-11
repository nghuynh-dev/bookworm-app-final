import { useSelector } from "react-redux";
import { useState } from "react";

export default function DescribeComponent(props) {
    const { handleAddToCart } = props
    const book = useSelector(state => state.shopReducer.bookIdReducer)
    const [quantity, setQuantity] = useState(1)
    const handleSubQuantity = () => {
        let amount = quantity
        if (quantity > 1) {
            amount = quantity - 1
        }
        setQuantity(amount)
    }
    const handleAddQuantity = () => {
        let amount = quantity
        if (quantity < 8) {
            amount = quantity + 1
        }
        setQuantity(amount)
    }
    return (
        <>
            {book ? (
                <div className="row detail-book">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="card mb-3">
                            <div className="row no-gutters">
                                <div className="col-md-3 d-flex align-items-end flex-column mb-4">
                                    {book.book.book_cover_photo ? (
                                        <img src={'/assets/bookcover/' + book.book.book_cover_photo + '.jpg'} alt="book" width="100%" />
                                    ) : (
                                        <img src={'/assets/bookcover/book5.jpg'} alt="book" width="100%" />
                                    )}
                                    <div className="card-text mt-4 author-detail-book">
                                        By (author) <b>{book.book.author.author_name}</b>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="card-body ml-2">
                                        <h3 className="card-title"><b>{book.book.book_title}</b></h3>
                                        <div className="card-text">Book Description</div>
                                        <p className="card-text">{book.book.book_summary}</p>
                                        <p className="card-text">{book.book.author.author_bio}</p>
                                        <p className="card-text">{book.book.category.category_desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <div className="d-flex align-items-center mx-4">
                                    {book.book.sub_price != 0 ? (
                                        <>
                                            <span><del>${book.book.book_price}</del></span>
                                            <span className="h2 my-0 pl-2"><b>${book.book.final_price}</b></span>
                                        </>
                                    ) : (
                                        <span className="h2 my-0 pl-2"><b>${book.book.final_price}</b></span>
                                    )}
                                </div>
                            </div>
                            <div className="mx-5 mt-5">Quantity</div>
                            <div className="quantity-item mx-5 mb-4">
                                <button onClick={() => handleSubQuantity()} type="button" className="btn btn-secondary" id='sub-number-order' >
                                    <i className="fa fa-minus"></i>
                                </button>
                                <div id="number-order">{quantity}</div>
                                <button onClick={() => handleAddQuantity()} type="button" className="btn btn-secondary" id='add-number-order' >
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                            <button data-book={JSON.stringify(book)} data-quantity={quantity} onClick={(e) => handleAddToCart(e)} type="button" className="btn btn-secondary btn-order mx-5 mb-5" >
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            ) : (<></>)}
        </>
    )
}
