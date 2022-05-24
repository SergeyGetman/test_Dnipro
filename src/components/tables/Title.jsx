import React, {useCallback, useEffect, useState} from 'react';
import axios, {Axios} from "axios";

export const Title = () => {

    const [users, setUsers] = useState(null)

    const axiosGet = useCallback(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log('this is response', res?.data)

            setUsers(res?.data)

    })
        })

    axiosGet()

    console.log('this is users', users)

    return (
        <div>
            <h2>this is {arrayUsers?.map(e => {
               return <div>{e}</div>
            })}</h2>
        </div>
    );
};

