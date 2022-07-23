import { combineReducers } from "redux";
import imagesReducer from "./imageReducer";
import commentsReducer from "./commentReducer";


export default combineReducers({
   imagesReducer,
   commentsReducer
});
