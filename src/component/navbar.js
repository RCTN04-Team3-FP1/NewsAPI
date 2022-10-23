import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        // <>
        //     <Link to='/'>Indonesia</Link>
        //     <Link to='/pro'>Programming</Link>
        // </>
        <>
            <Link to='/' className="header">
                <img alt='kamu'
                    src="https://img.icons8.com/material-rounded/24/000000/menu--v1.png"
                />
                <h1>Hacktiv News</h1>
                <input type="text" />
            </Link>
            <div className="header1">
                <Link to='/programming'>Programming</Link>
                <Link to='/covid'>Covid-19</Link>
                <Link to='/economy'>Economy</Link>
            </div>
            <div className="garis2"></div>
        </>
    )
}
