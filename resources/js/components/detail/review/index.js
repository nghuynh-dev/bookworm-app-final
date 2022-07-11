import { DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ReviewComponent() {
    return (
        // Review List
        <div className="row review-list">
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="border px-5 my-4 pt-5">
                    <div className="d-flex flex-row justify-content-start align-items-center">
                        <h4><b>Customer Reviews</b></h4>
                        {star != 0 ? (
                            <span className="ml-2">(Filtered by {starTitle})</span>
                        ) : (<></>)}
                    </div>
                    <div className="d-flex flex-row justify-content-start align-items-center mt-3">
                        <p className="h2 font-weight-bold">{starCount.avg_star}</p>
                        <p className="h2 font-weight-bold ml-3">Star</p>
                    </div>
                    <div className="d-flex flex-row justify-content-start align-items-center">
                        <div>
                            <Link className="filter-all-star-review" to={{
                                pathname: '/detail/' + this.props.idBook,
                                search: qs.stringify(this.handleQuerySearch({
                                    star: 0
                                }))
                            }} onClick={() => this.setState({
                                starTitle: null,
                                star: 0
                            })} replace >Total ({starCount.count_star})</Link>
                        </div>
                        <div className="ml-3">
                            {starElement}
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center mt-4 filter-date-review">
                        <div>
                            Showing {from}-{to} of {totalProduct} of reviews
                        </div>
                        <div className="d-flex flex-row justify-content-start align-items-center">
                            <div className="input-group mx-4">
                                <DropdownButton
                                    as={ButtonGroup}
                                    key='sort'
                                    id='dropdown-variants-sort-review'
                                    variant='secondary'
                                    title={sortTitle}>
                                    <Dropdown.Item eventKey="none" as={Link} to={{
                                        pathname: '/detail/' + this.props.idBook
                                    }}
                                        onClick={() => this.setState({
                                            sortTitle: 'Default',
                                            showTitle: 'Show 5',
                                            starTitle: null,
                                            sort: 'none',
                                            show: 5,
                                            star: 0
                                        })} replace >Default</Dropdown.Item>
                                    <Dropdown.Item eventKey="desc" as={Link} to={{
                                        pathname: '/detail/' + this.props.idBook,
                                        search: qs.stringify(this.handleQuerySearch({
                                            sort: 'desc'
                                        }))
                                    }} onClick={() => this.setState({
                                        sortTitle: `Sort by date: newest to oldest`,
                                        sort: 'desc'
                                    })} replace >Sort by date: newest to oldest</Dropdown.Item>
                                    <Dropdown.Item eventKey="asc" as={Link} to={{
                                        pathname: '/detail/' + this.props.idBook,
                                        search: qs.stringify(this.handleQuerySearch({
                                            sort: 'asc'
                                        }))
                                    }} onClick={() => this.setState({
                                        sortTitle: `Sort by date: oldest to newest`,
                                        sort: 'asc'
                                    })} replace >Sort by date: oldest to newest</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className="input-group">
                                <DropdownButton
                                    as={ButtonGroup}
                                    key='show'
                                    id='dropdown-variants-show-review'
                                    variant='secondary'
                                    title={showTitle}>
                                    <Dropdown.Item eventKey="5" as={Link} to={{
                                        pathname: '/detail/' + this.props.idBook,
                                        search: qs.stringify(this.handleQuerySearch({
                                            show: 5
                                        }))
                                    }}
                                        onClick={() => this.setState({
                                            showTitle: `Show 5`,
                                            show: 5
                                        })} replace >Show 5</Dropdown.Item>
                                    <Dropdown.Item eventKey="10" as={Link} to={{
                                        pathname: '/detail/' + this.props.idBook,
                                        search: qs.stringify(this.handleQuerySearch({
                                            show: 10
                                        }))
                                    }}
                                        onClick={() => this.setState({
                                            showTitle: `Show 10`,
                                            show: 10
                                        })} replace >Show 10</Dropdown.Item>
                                    <Dropdown.Item eventKey="15" as={Link} to={{
                                        pathname: '/detail/' + this.props.idBook,
                                        search: qs.stringify(this.handleQuerySearch({
                                            show: 15
                                        }))
                                    }}
                                        onClick={() => this.setState({
                                            showTitle: `Show 15`,
                                            show: 15
                                        })} replace >Show 15</Dropdown.Item>
                                    <Dropdown.Item eventKey="20" as={Link} to={{
                                        pathname: '/detail/' + this.props.idBook,
                                        search: qs.stringify(this.handleQuerySearch({
                                            show: 20
                                        }))
                                    }}
                                        onClick={() => this.setState({
                                            showTitle: `Show 20`,
                                            show: 20
                                        })} replace >Show 20</Dropdown.Item>
                                    <Dropdown.Item eventKey="25" as={Link} to={{
                                        pathname: '/detail/' + this.props.idBook,
                                        search: qs.stringify(this.handleQuerySearch({
                                            show: 25
                                        }))
                                    }}
                                        onClick={() => this.setState({
                                            showTitle: `Show 25`,
                                            show: 25
                                        })} replace >Show 25</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                    </div>
                    <div className="list-card-review">
                        {reviewsElement}
                    </div>
                    <div className="pagination-review mb-3">
                        <nav aria-label=" Page navigation review">
                            <ul className="pagination justify-content-start" id='pagination-ul'>
                                {currentPage == 1 ? (
                                    <li className="page-item disabled">
                                        {prevButton}
                                    </li>
                                ) : (
                                    <li className="page-item">
                                        {prevButton}
                                    </li>
                                )}
                                {renderPageNumbers}
                                {currentPage == lastPage ? (
                                    <li className="page-item disabled">
                                        {nextButton}
                                    </li>
                                ) : (
                                    <li className="page-item">
                                        {nextButton}
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <SubmitForm idBook={this.props.idBook} />
        </div>
    )
}
