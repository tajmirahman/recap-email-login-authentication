import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div >
            <h1 className='text-center'>This is main layout page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;