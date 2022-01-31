import { combineReducers } from "redux";
import bankReducer from "./bankReducer";

const reducers = combineReducers({
    bank: bankReducer
})

export default reducers

export type BankState = ReturnType<typeof reducers> //determine reducer into a type for dispatch purpose