import React from 'react';
import cl from './styles.module.css'
import {globalHistory} from "../../history/useHistory";
import {Routing} from "../../routing/Routing";

export const Button = () => {
    return (
        <button className={cl.fourth} onClick={() => globalHistory.push(Routing.firstPage)}>
          Do you want see the table ? Push me
        </button>
    );
};

