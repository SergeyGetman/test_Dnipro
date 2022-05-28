import React, { useEffect, useState} from 'react';
import axios from "axios";

export const useTitle = () => {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUsers(res?.data)
        })
    }, [])

    return {
        users
    }
};

