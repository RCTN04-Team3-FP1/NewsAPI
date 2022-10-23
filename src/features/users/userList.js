import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUs } from "./usersSlice";

// import React from 'react'

export const UserList = () => {
    const users = useSelector((state) => state.user.entities)
    const dispach = useDispatch()
    const doFetch = () => {
        dispach(fetchUs())
    }
    useEffect(() => {
        doFetch()
    }, [])
    return (
        <>
            {users.map((user => (
                <div key={user.id}>{user.name}</div>
            )))}
        </>
    )
}
