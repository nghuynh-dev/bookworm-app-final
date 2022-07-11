import {useSelector} from "react-redux";

export default function MainTitleComponent(){
    const book = useSelector(state => state.shopReducer.bookIdReducer)
    return(
        <div className="main-title mx-5 mb-4" >
            <div className="main-title-information">
                <b className="main-title-information-1">{book.book.category.category_name.replace(/(\b[a-z](?!\s))/g,function(x){return x.toUpperCase()})}</b>
            </div>
            <hr/>
        </div>
    )

}
