import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getBookById} from "../actions";
import MainTitleComponent from "../components/detail/title";
import DescribeComponent from "../components/detail/describe";
import ReviewCardComponent from "../components/detail/reviewcard";
import {useEffect} from "react";
import {addToCart} from "../actions/cart.action";

export default function Detail(){
    const { id } = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBookById(id));
    },[])
    const handleAddToCart = (e) => {
        const book = JSON.parse(e.target.dataset.book).book
        const quantity = e.target.dataset.quantity
        // console.log(book)

        const data = {
            id: book.book_id,
            title: book.book_title,
            img: book.book_cover_photo,
            author: book.author.author_name,
            final_price:book.final_price,
            book_price: book.book_price,
            quantity: parseInt(quantity)

        }
        dispatch(addToCart(data))
    }

    return (
        <div className="wrapper-detail">
            <MainTitleComponent id={id}/>
            <div className="mx-5">
                <DescribeComponent handleAddToCart={e => handleAddToCart(e)}/>
                <ReviewCardComponent />
            </div>
        </div>
    )
}
