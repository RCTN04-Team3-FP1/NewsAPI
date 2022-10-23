import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "../../component/card";
import { fetchUs } from "./articleSlice";

// import React from 'react'

export const ArtList = ({ hay }) => {
    const USER_URL = `https://newsapi.org/v2/${hay}&apiKey=9e5f9785232c458cbd9016f5816d05a8`
    const users = useSelector((state) => state.article.entities)
    const dispach = useDispatch()
    const doFetch = () => {
        dispach(fetchUs(USER_URL))
    }
    const ganti = (dia) => {
        const name = `aku ${dia}`
        console.log(name);
    }
    useEffect(() => {
        ganti('kamu')
        doFetch()
    }, [])
    return (
        // <>
        //     <h1>Indo</h1>
        //     {users.map(((val, index) => (
        //         <div key={index}>{JSON.stringify(val.title)}</div>
        //     )))}
        // </>
        <div className="content4 isi">
            {users.map(((val, index) => (
                <Card data={val} />
            )))}
        </div>
    )
}
