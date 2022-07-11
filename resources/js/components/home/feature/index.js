import React from "react";
import { ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {useSelector} from "react-redux";
import BookCardComponent from "../../bookcard";

export default function FeatureComponent(props){
    const {handleOnChange} = props

    const featureBook = useSelector(state => state.bookReducer.homeFeatureList);
    const dataBindingGrid = () => {
        return(
            <div className="row" >
                <BookCardComponent attribute={featureBook}/>
            </div>
        )
    }
    return(
        <div className="wrapper">
            <div className="container-fluid select-home-bar mb-4">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="text-center mt-5">Featured Books</h3>
                    </div>
                    <div className="col-lg-12">
                        <div className="text-center">
                            <ToggleButtonGroup type="radio" name="options" defaultValue={'recommend'} onChange={(e) => handleOnChange(e)}>
                                <ToggleButton id="tbg-radio-1" value='recommend' >
                                    Recommended
                                </ToggleButton>
                                <ToggleButton id="tbg-radio-2" value='popular' >
                                    Popular
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-home-list mx-5">
                <div className="mx-6 mt-4">
                    {dataBindingGrid()}
                </div>
            </div>
        </div>
    );
}
