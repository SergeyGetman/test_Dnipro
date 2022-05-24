import React from 'react';
import cl from './tables/styles.module.css'

const arr = ['mama', 'papa', 'baba', 'deda']

export const Table = () => {
    return (

            <div className={cl.grid__container}>
                <div className={cl.grid__item}>Select
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                    <input type="checkbox"/>
                </div>
                <div className={cl.grid__item}>Name</div>
                <div className={cl.grid__item}>Size</div>
                <div className={cl.grid__item}>Date</div>
        </div>
    );
};

