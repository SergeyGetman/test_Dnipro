import * as React from "react";
import './App.css';
import { Link, Route, Switch } from "react-router-dom";
import { Table } from "./components/Table";
import { Navigations } from "./components/Navigations";
import { Routing } from "./routing/Routing";
import { Button } from "./components/tables/Button";
import GetData from "./components/GetData";
import { ArrowRight } from 'react-bootstrap-icons';
import { ReactComponent as AdIcon }  from './images/more.svg'
import TestedMui from "./components/TestedMui";
import {Container} from "@mui/material";

function App() {
  return (
        <div >
            <header className="header">
                <Link to={Routing.home}>{Routing.textTitle.nameFirstPage}</Link>
                <Link to={Routing.firstPage}>{Routing.textTitle.nameSecondPage}</Link>
                <Link to={Routing.secondPage}>{Routing.textTitle.nameThirdPage}</Link>
                <Link to={Routing.testedPage}>{Routing.textTitle.testedPage}</Link>
                <div className='data'>
                    data:
                    <GetData />
                    <ArrowRight  />

                </div>
                <div>
                    <AdIcon />
                </div>

            </header>

            <Container>
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

                    <Route exact path="/tested">
                        <TestedMui />
                    </Route>
                </Switch>
            </Container>




      </div>

  );
}

export default App;
