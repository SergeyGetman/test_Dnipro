import React, {useEffect} from 'react';
import cl from './tables/styles.module.css'
import {Routing} from "../routing/Routing";
import {useTitle} from "../Hooks/useTitle";
import {UseGetDAte} from "../Hooks/useGetDAte";
import {Checkbox} from "./Checkbox";
import GetData from "./GetData";


export const Table = () => {

    const {users} = useTitle()
    const {tableName } = Routing;

    return (
            <div className={cl.grid__container}>
                <div className={cl.grid__item}>{tableName.Select}
                    {users?.map( () => {
                        return <Checkbox />
                    })}
                </div>
                <div className={cl.grid__item}>
                    {tableName.Name}
                    {users?.map((e, idx) => {
                        return <div className={cl.grid__item} key={idx}>{e.name}</div>
                    })}
                    </div>
                <div className={cl.grid__item}>{tableName.Size}
                    {users?.map((e, idx) => {
                        return <div className={cl.grid__item} key={idx}>{e.name}</div>
                    })}
                </div>
                <div className={cl.grid__item}>{tableName.Date}
                    {users?.map(() => {

                        return <div className={cl.grid__item}>
                            <GetData />
                        </div>
                    })}
                </div>
        </div>
    );
};

