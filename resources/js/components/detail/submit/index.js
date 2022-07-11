import { Alert } from 'react-bootstrap';

export default function SubmitComponent(){

    let errorTitleElement;
    let errorDetailElement;
    let errorStartElement;
    let showAlert;
    let seconds;
    let showError;
    let errorSever;
    return(
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="write-a-review py-4">
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item ml-2">
                                <span className="h4">
                                    <b>Write a review</b>
                                </span>
                        </li>
                        <li className="list-group-item">
                            <div>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="reviewTitle">Add a title</label>
                                        <input type="text"
                                               className="form-control"
                                               value={review_title}
                                               id="reviewTitle"
                                               onChange={this.handleChangeReviewTitle.bind(this)}/>
                                        {errorTitleElement}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="detailBook">
                                            Details please! Your review helps other shoppers
                                        </label>
                                        <textarea className="form-control"
                                                  value={review_details}
                                                  id="detailBook"
                                                  rows="3"
                                                  onChange={this.handleChangeReviewDetail.bind(this)}></textarea>
                                        {errorDetailElement}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ratingStar">Select a rating star</label>
                                        <select className="custom-select my-1 mr-sm-2"
                                                id="ratingStar"
                                                value={rating_start}
                                                onChange={this.handleSelectStar.bind(this)}>
                                            <option value="none">None</option>
                                            <option value="1">1 Star</option>
                                            <option value="2">2 Star</option>
                                            <option value="3">3 Star</option>
                                            <option value="4">4 Star</option>
                                            <option value="5">5 Star</option>
                                        </select>
                                        {errorStartElement}
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li className="list-group-item mx-5">
                            <button type="submit" className="btn btn-secondary btn-submit-review" onClick={this.submitFormReview.bind(this)}>
                                Submit Review
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {showAlert ? (
                <Alert variant="success" onClose={() => this.setState({showAlert:false})} dismissible>
                    <Alert.Heading>Added new review successfully</Alert.Heading>
                    <p>
                        Reload review list of product after {seconds} seconds
                    </p>
                </Alert>
            ) : (<></>)}
            {showError ? (
                <Alert variant="danger" onClose={() => this.setState({showError:false})} dismissible>
                    <Alert.Heading>Error</Alert.Heading>
                    <p>
                        {errorSever}
                    </p>
                </Alert>
            ) : (<></>)}
        </div>
    )
}
