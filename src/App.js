import "./App.css";
import { useEffect } from "react";
import { getStocks } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const myData = useSelector(state => state.response); 
  
  const getStocksData = () => {
    dispatch(getStocks());
    console.log((myData["response"]["Time Series (5min)"]))
  }
  useEffect(() => {
    getStocksData();
  },[]);
  return <div className="App">Trading App</div>;
}

export default App;
