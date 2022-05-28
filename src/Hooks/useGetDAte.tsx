import React from 'react';
import {TDate} from "../Types/GetData";


export const UseGetDAte = () : TDate => {
    let newDate = new Date()
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    console.log('this is newDate', newDate)


    return {
        newDate,
        month,
        year
    }
};

