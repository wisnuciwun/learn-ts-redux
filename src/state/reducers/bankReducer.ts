import { ActionType } from "state/actionTypes"
import { BankReducerAction } from "../actions"

const initialState = 0

const bankReducer = (state: number = initialState, action: BankReducerAction) => {
    switch (action.type) {
        case ActionType.DEPOSIT:
            return state + action.payload
        case ActionType.WITHDRAW:
            return state - action.payload
        case ActionType.BANKRUPT:
            return 0
        default:
            return state
    }
}

export default bankReducer