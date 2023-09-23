import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Tracking from './pages/tracking/Tracking';

const Routers = ({language}) => {
    return (
        <Routes>
          <Route path='/' Component={Tracking} language={language}/>
        </Routes>
        );
}

export default Routers