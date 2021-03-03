import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import CoinList from "./containers/CoinList";
import Coin from "./containers/Coin";
import './css/pagination.css'

function App() {
  return (
      <div className="App">
        <Switch>
          <Route path={"/"} exact component={CoinList} />
            <Route path={"/coin/:id"} exact component={Coin} />
          <Redirect to={"/"} />
        </Switch>
      </div>
  );
}

export default App;