import { combineReducers } from 'redux'
import bookReducer from './book.reduce'
import shopReducer from './shop.reducer'
import cartReducer from "./cart.reducer";

const appReducer = combineReducers({
    bookReducer,shopReducer,cartReducer
})
const rootReducer = (state, action) => {
    return appReducer(state, action)
}
export default rootReducer
