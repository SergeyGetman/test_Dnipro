import React, {useEffect} from 'react';
import cl from './tables/styles.module.css'
import {Routing} from "../routing/Routing";
import {useTitle} from "../Hooks/useTitle";


const arr = ['mama', 'papa', 'baba', 'deda']

export const Table = () => {

    const {users} = useTitle()
    const {tableName } = Routing;


    return (
            <div className={cl.grid__container}>
                <div className={cl.grid__item}>{tableName.Select}
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                </div>
                <div className={cl.grid__item}>
                    {tableName.Name}
                    {arr.map((e, idx) => {
                        return <div key={idx} className={cl.grid__item}>{e}</div>
                    })}
                    </div>
                <div className={cl.grid__item}>{tableName.Size}</div>
                <div className={cl.grid__item}>{tableName.Date}</div>
        </div>
    );
};

