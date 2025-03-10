import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import PlanPage from '../pages/PlanPage';
import OrderForm from '../pages/OrderForm';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/plan',
        element: <PlanPage/>
    },
    {
        path: '/order',
        element: <OrderForm/>
    }
]);

export default Router;