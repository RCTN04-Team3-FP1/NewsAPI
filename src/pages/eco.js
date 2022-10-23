import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUs } from "../features/users/articleSlice";

import React from 'react'
import { Card } from "../component/card";

export const Economy = ({ hay }) => {
    const USER_URL = `https://newsapi.org/v2/everything?q=economy&apiKey=9e5f9785232c458cbd9016f5816d05a8`
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
        <div className="content4 isi">
            {users.map(((val, index) => (
                <Card data={val} />
            )))}
        </div>
    )
}
