import { Dispatch } from "redux"
import { BankReducerAction } from "state/actions"
import { ActionType } from "state/actionTypes"

export const depositMoney = (value: number) => {
    return (dispatch: Dispatch<BankReducerAction>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: value
        })
    }
}

export const withdrawMoney = (value: number) => {
    return (dispatch: Dispatch<BankReducerAction>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: value
        })
    }
}

export const bankruptMoney = () => {
    return (dispatch: Dispatch<BankReducerAction>) => {
        dispatch({
            type: ActionType.BANKRUPT,
        })
    }
}