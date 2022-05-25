import React from 'react';

export const UseGetDAte = () => {
    let newDate = new Date()
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();


    return {
        newDate,
        month,
        year
    }
};

