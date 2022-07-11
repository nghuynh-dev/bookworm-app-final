import React, {useEffect} from 'react';
import { Accordion,Card,Dropdown } from 'react-bootstrap';
import {useSelector} from "react-redux";

export default function SidebarComponent(props){
    const {handleOnClickCate, handleOnClickStar, handleOnClickAuthor} = props
    const authors = useSelector(state => state.shopReducer.authorReducer)
    const categories = useSelector(state => state.shopReducer.categoryReducer)
    const stars = useSelector(state => state.shopReducer.starReducer)

    return (
        <div className="col-lg-2 col-md-3 col-sm-12 px-0 filter-left-sidebar">
            <div className="row mt-4 mb-3">
                <div className="col-lg-12">
                    <b>Filter By</b>
                </div>
            </div>
            <div className="row filter-data-sidebar">
                <div className="col-lg-12">
                    <Accordion defaultActiveKey="0" className="mb-4" >
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <h4>Category</h4>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className="px-0 my-1">
                                    {categories.map((item, index) => {

                                        return(
                                            <Dropdown.Item eventKey={index} key={item.id} data-name={item.category_name.replace(/(\b[a-z](?!\s))/g,function(x){return x.toUpperCase()})} data-id={item.id} onClick={e => handleOnClickCate(e)}>
                                                {item.category_name.replace(/(\b[a-z](?!\s))/g,function(x){return x.toUpperCase()})}
                                            </Dropdown.Item>
                                        )
                                    })}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion defaultActiveKey="1" className="mb-4">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                <h4>Author</h4>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="px-0 my-1">
                                    {authors.map((item, index) => {
                                        return(
                                            <Dropdown.Item key={index} data-name={item.author_name} data-id={item.id} onClick={e => handleOnClickAuthor(e)}>
                                                {item.author_name}
                                            </Dropdown.Item>
                                        )
                                    })}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <Accordion defaultActiveKey="2" className="mb-4">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                <h4>Rating Review</h4>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="2">
                                <Card.Body className="px-0 my-1">
                                    {stars.map((item, index) => {
                                        return(
                                            <Dropdown.Item key={index} data-id={item} onClick={e => handleOnClickStar(e)}>
                                                {item} Star
                                            </Dropdown.Item>
                                        )
                                    })}
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
