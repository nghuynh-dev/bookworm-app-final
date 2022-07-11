import { bookConstants } from "../constants";
const { GET_BOOK_BANNER, GET_BOOK_POPULAR, GET_BOOK_RECOMMEND } = bookConstants

const initialState = {
    homeBannerList: [],
    homeFeatureList: [],
};

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOK_BANNER:
            return {
                ...state, //copy state hien tai
                homeBannerList: action.payload.data//update
            }
        case GET_BOOK_RECOMMEND:
            return {
                ...state,
                homeFeatureList: action.payload.data //update
            }
        case GET_BOOK_POPULAR:
            return {
                ...state,
                homeFeatureList: action.payload.data //update
            }
        default:
            return state
    }
}

export default bookReducer;
