import React, {useEffect} from 'react';
import cl from './tables/styles.module.css'
import {Routing} from "../routing/Routing";
import axios from "axios";
import {Title} from "./tables/Title";

const arr = ['mama', 'papa', 'baba', 'deda']

export const Table = () => {

    const {tableName : {Name, Date, Select, Size}} = Routing;




    return (

            <div className={cl.grid__container}>
                <div className={cl.grid__item}>{Select}
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                </div>
                <div className={cl.grid__item}>
                    {Name}
                    {arr.map((e, idx) => {
                        return <div key={idx} className={cl.grid__item}>{e}</div>
                    })}
                    </div>
                <div className={cl.grid__item}>{Size}</div>
                <div className={cl.grid__item}>{Date}</div>
                <Title />
        </div>
    );
};

