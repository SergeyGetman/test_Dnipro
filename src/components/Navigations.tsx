import React from 'react';
import {Link} from "react-router-dom";
import {Routing} from "../routing/Routing";

export const Navigations = () => {
    return (
        <div>
            <Link to={Routing.firstPage}>Table List</Link> <br/>
            <Link to={Routing.home}>Home</Link> <br/>
        </div>
    );
};

