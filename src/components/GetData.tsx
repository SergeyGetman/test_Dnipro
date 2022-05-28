import React from 'react';
import {UseGetDAte} from "../Hooks/useGetDAte";


const GetData = () => {
    let {newDate, month, year} = UseGetDAte()
    newDate = newDate.toString()?.split(" ")

    return (
       <>
           {`${newDate[0]} ${month} ${newDate[1]} ${year}`}
       </>
    );
};

export default GetData;