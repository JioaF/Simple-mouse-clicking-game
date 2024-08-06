import React from "react";
import ReactDOM from "react-dom/client";
import AppPage from "./pages/AppPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import "./index.css";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppPage />,
        errorElement: <p>Not found</p>
    },
    {
        path: '/about',
        element: <AboutPage />,
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
