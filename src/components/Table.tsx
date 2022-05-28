import React, {useEffect, useState} from 'react';
import cl from './tables/styles.module.css'
import {Routing} from "../routing/Routing";
import {useTitle} from "../Hooks/useTitle";
import {Checkbox} from "./Checkbox";
import {Footer} from "./Footer";


export const Table = () => {

    const { users } = useTitle()
    const { tableName } = Routing;

        useEffect(() => {
            setArr(users)
        },[users])
        const [arr, setArr] = useState( users || [] )


    const fullName = arr?.map((element, index) => {
        return <div className={cl.table__inside} key={index} onClick={() => remove(index)}>
            {element.name}
        </div>;
    });

    const userName = arr?.map((element, index) => {
        return <div className={cl.table__inside} key={index} onClick={() => remove(index)}>
            {element.username}
        </div>;
    });

    const remove = (index) => {
        setArr([...arr?.slice(0, index), ...arr?.slice(index + 1)]);
    }

    return (
            <div className={cl.table__header}>
                <div className={cl.table}>
                    <div className={cl.table__name}>{tableName.Select}</div>
                    {users?.map(() => {
                      return  <Checkbox />
                    })}
                </div>
                <div className={cl.table}>
                   <div className={cl.table__name}>{tableName.AllTabs}</div>
                        {users?.map((e, idx ) => {
                            return <div key={idx} className={cl.table__inside}>
                                <a href="#" className={cl.table__block}>{e.name + "+"}</a>
                                <div className={cl.table__items__list}>
                                    <div onClick={() => remove(idx)}>Delete row</div>
                                </div>
                            </div>
                        })}
                </div>
                <div className={cl.table}>
                    <div className={cl.table__name}>{tableName.Name}</div>
                             <div className={cl.table__inside}>
                            <a href="#" className={cl.table__block}>{userName}</a>
                        </div>

                </div>

                <div className={cl.table}>
                    <div className={cl.table__name}>{tableName.FullName}</div>
                    <div className={cl.table__inside}>
                        <a href="#" className={cl.table__block}>{fullName}</a>
                    </div>
                </div>
                <div className={cl.table__name}>
                    <Footer/>
                </div>
        </div>

    );
};
