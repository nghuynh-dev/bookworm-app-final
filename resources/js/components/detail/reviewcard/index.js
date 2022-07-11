import { useSelector } from "react-redux";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ButtonGroup } from "reactstrap";

export default function ReviewCardComponent() {
    const book = useSelector(state => state.shopReducer.bookIdReducer)
    console.log(book.reviews)
    const dataReview = book.reviews.data
    let handleAvg = book.count[0].avg_star
    if (handleAvg == null) {
        handleAvg = 0
    }
    return (
        <div className="row review-list">
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="border px-5 my-4 pt-5">
                    <div className="d-flex flex-row justify-content-start align-items-center">
                        <h4><b>Customer Reviews</b></h4>
                        <span className="ml-2">(Filtered by)</span>
                    </div>
                    <div>
                        <div className="d-flex flex-row justify-content-start align-items-center mt-3">
                            <p className="h2 font-weight-bold">{handleAvg}</p>
                            <p className="h2 font-weight-bold ml-3">Star</p>
                        </div>
                        <div className="d-flex flex-row justify-content-start align-items-center">
                            <div>
                                <div>Total star {book.count[0].count_star}</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center mt-4 filter-date-review">
                        <div>
                        </div>
                        {/* <div className="d-flex flex-row justify-content-start align-items-center">
                            <div className="input-group mx-4">
                                <DropdownButton
                                    as={ButtonGroup}
                                    key='sort'
                                    id='dropdown-variants-sort-review'
                                    variant='secondary'
                                    title='Default'>
                                    <Dropdown.Item eventKey="none">Default</Dropdown.Item>
                                    <Dropdown.Item eventKey="desc">Sort by date: newest to oldest</Dropdown.Item>
                                    <Dropdown.Item eventKey="asc">Sort by date: oldest to newest</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className="input-group">
                                <DropdownButton
                                    as={ButtonGroup}
                                    key='show'
                                    id='dropdown-variants-show-review'
                                    variant='secondary'
                                    title='Show 5'>
                                    <Dropdown.Item eventKey="5" as={Link} >Show 5</Dropdown.Item>
                                    <Dropdown.Item eventKey="10" as={Link}>Show 10</Dropdown.Item>
                                    <Dropdown.Item eventKey="15" as={Link}>Show 15</Dropdown.Item>
                                    <Dropdown.Item eventKey="20" as={Link}>Show 20</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div> */}
                    </div>
                    <div className="list-card-review">
                        {
                            dataReview.map((item, index) => {
                                return (
                                    <div className="card-review my-4" key={index}>
                                        <div className="review-title">
                                            <span className="review-content-title">
                                                <span className="h5"><b>{item.review_title}</b></span>
                                            </span>
                                            <span className="review-star-title">
                                                <span className='mx-2'>|</span> {item.rating_start} star
                                            </span>
                                        </div>
                                        <div className="review-body my-4">
                                            {item.review_details}
                                        </div>
                                        <div className="review-date">
                                            {item.review_date}
                                        </div>
                                        <hr />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
