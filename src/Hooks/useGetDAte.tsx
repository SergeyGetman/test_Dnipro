import React from 'react';
import {TDate} from "../Types/GetData";

export const UseGetDAte = () : TDate => {
    let newDate = new Date()
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();

    return {
        newDate,
        month,
        year
    }
};

