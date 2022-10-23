import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Navbar } from '../component/navbar';
import { ArtList } from '../features/users/articleList';
import { Covid } from './covid';
import { Economy } from './eco';
import { Programming } from './programming';

export const Template = () => {
    return (
        <div className="view">
            <Navbar />
            <Routes>
                <Route path='/' element={<ArtList hay={'top-headlines?country=id'} />} />
                <Route path='/programming' element={<Programming />} />
                <Route path='/covid' element={<Economy />} />
                <Route path='/economy' element={<Covid />} />
            </Routes>
        </div>
    )
}
