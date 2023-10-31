import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { action } from './store/Index';

function App() {
  const counter=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  const increement=()=>{
    dispatch(action.increement())
  }
  const decreement=()=>{
    dispatch(action.decreement())
  }
  const addBy=()=>{
    dispatch(action.addBy(10))
  }
  return (
    <div className="App">
        <h1>counter by redux</h1>
        <h2>{counter}</h2>
        <button onClick={increement}>incrrement</button>
        <button onClick={decreement}>decreement</button>
        <button onClick={addBy}>addBy 10</button>
    </div>
  );
}

export default App;
