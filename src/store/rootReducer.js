import { combineReducers } from "redux";
import optionReducer from "./reducers/optionReducer";

//tüm stateleri topladığım yer
const rootReducer = combineReducers({
    Option : optionReducer
})
export default rootReducer;