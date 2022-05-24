import React from "react";
import './App.css';
import {Link, Route, Router, Switch} from "react-router-dom";
import {Table} from "./components/Table";
import {Navigations} from "./components/Navigations";
import { Routing } from "./routing/Routing";

function App() {
  return (
        <div >
            <header className="header">
                <Link to={Routing.home}>{Routing.textTitle.nameFirstPage}</Link>
                <Link to={Routing.firstPage}>{Routing.textTitle.nameSecondPage}</Link>
                <Link to={Routing.secondPage}>{Routing.textTitle.nameThirdPage}</Link>

            </header>


              <Switch>
                  <Route exact path="/">
                     <h1>This is Home Page </h1>
                  </Route>
                  <Route exact path="/firstpage">
                      <Table />
                  </Route>
                  <Route exact path="/dashboard">
                      <Navigations />
                  </Route>
              </Switch>
      </div>

  );
}

export default App;
