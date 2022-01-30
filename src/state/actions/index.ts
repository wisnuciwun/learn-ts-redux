import { ActionType } from "state/actionTypes";

interface DepositAction {
    type: ActionType.DEPOSIT
    payload: number
}

interface WithdrawAction {
    type: ActionType.WITHDRAW
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
}

export type BankReducerAction = DepositAction | WithdrawAction | BankruptAction
