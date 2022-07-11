import { getBookBanner, getBookPopular, getBookRecommend } from "../actions";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import BannerComponent from "../components/home/banner";
import FeatureComponent from "../components/home/feature";

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBookBanner());
        dispatch(getBookRecommend());
    }, [])

    const handleOnChangeButton = (e) => {
        if (e === 'recommend') dispatch(getBookRecommend());
        else dispatch(getBookPopular());
    }
    return (
        <>
            <BannerComponent />
            <FeatureComponent handleOnChange={(e) => handleOnChangeButton(e)} />
        </>
    );
}


