import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, BankState } from 'state';
import bankReducer from 'state/reducers/bankReducer';

function App(props: any) {

  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(actionCreators, dispatch) //to access action creators
  const state = useSelector((state: BankState) => state.bank) //to pick data from bankreducer

  return (
    <div className="App">
     <h1>{state}</h1>
     <button onClick={() => depositMoney(1000)} >Deposit</button>
     <button onClick={() => withdrawMoney(200)} >Withdraw</button>
     <button onClick={() => bankruptMoney()} >Bankrupt</button>
    </div>
  );
}

// const mapStateToProps = (state: BankState) => {
//   return state
// }

// export default connect(mapStateToProps)(App); // you can use this, or above
export default App
