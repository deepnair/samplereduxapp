import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from './state/index'



function App() {

  const account = useSelector((state) => state.account)
  const dispatch = useDispatch()
  const { depositAmount, withdrawAmount } = bindActionCreators(actionCreators, dispatch);
  return (
    
    <div className="App">
      <div className="data">{account}</div>
      <button onClick={() => depositAmount(1000)}>Deposit</button>
      <button onClick={() => withdrawAmount(1000)}>Withdraw</button>
    </div>
  
  );
}

export default App;
