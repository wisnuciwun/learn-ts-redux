const initialState = 0

interface DepositAction {
    type: "deposit"
    payload: number
}

interface WithdrawAction {
    type: "withdraw"
    payload: number
}

interface BankruptAction {
    type: "bankrupt"
}

type ActionProps = DepositAction | WithdrawAction | BankruptAction

const reducer = (state: number = initialState, action: ActionProps) => {
    switch (action.type) {
        case "deposit":
            return state + action.payload
        case "withdraw":
            return state - action.payload
        case "bankrupt":
            return 0
        default:
            return state
    }
}

export default reducer