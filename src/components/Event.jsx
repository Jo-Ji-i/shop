import React from 'react';
import { Outlet } from 'react-router-dom';

const Event = () => {
    return (
        <div className="flex items-center justify-center w-full h-8 bg-gray-200">
            <h1 className="text-xl font-bold ">Today Event</h1>
            <Outlet />
        </div>
    );
};

export default Event;
