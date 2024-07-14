import React from 'react';
import {Link} from "react-router-dom";
import {Routing} from "../routing/Routing";
import {Button} from "./tables/Button";
import {Table} from "./Table";


export const Navigations = () => {
    return (
        <div>
            <Link to={Routing.firstPage}>Table List</Link> <br/>
            <Link to={Routing.home}>Home</Link> <br/>

        </div>
    );
};

