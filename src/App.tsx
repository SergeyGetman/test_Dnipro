import React from "react";
import './App.css';
import {Link, Route, Switch} from "react-router-dom";
import {Table} from "./components/Table";
import {Navigations} from "./components/Navigations";
import { Routing } from "./routing/Routing";
import {Button} from "./components/tables/Button";
import GetData from "./components/GetData";

function App() {
  return (

        <div >
            <header className="header">
                <Link to={Routing.home}>{Routing.textTitle.nameFirstPage}</Link>
                <Link to={Routing.firstPage}>{Routing.textTitle.nameSecondPage}</Link>
                <Link to={Routing.secondPage}>{Routing.textTitle.nameThirdPage}</Link>
                <div className='data'>
                    <GetData />
                </div>

            </header>


              <Switch>
                  <Route exact path="/">
                     <h1>This is Home Page </h1>
                      <Button />
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
