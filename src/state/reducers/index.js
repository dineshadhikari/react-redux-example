import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    amount: amountReducer,
    dev: amountReducer,
})

export default reducers