import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./redux/configure_store"
import { test, fetchAsync } from "./redux/slices"

function App() {

  let state = useSelector((state:AppState)=>state);
  let dispatch = useDispatch();

  const actionHandler = () => {
    dispatch(test())
    dispatch(fetchAsync())
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          state?.map?.((user,index)=>{
            return(
              <div key={user.id} >
               {++index} {user.name}
              </div>
            )
          })
        }
       <button onClick={actionHandler}> test</button>
       
      </header>
    </div>
  );
}

export default App;
