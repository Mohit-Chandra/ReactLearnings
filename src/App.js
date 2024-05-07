import React, { lazy, Suspense }from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";

const Grocery = lazy(() => import("./components/Grocery"));

const Applayout = () => {
    return (
    <div className = "app">
        <Header />
        <Outlet />
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<div>Loading...</div>}><Grocery/></Suspense>,
            },
            {
                path: "/restro/:resId",
                element: <RestroMenu />
            }
        ],
        errorElement: <Error />,
    },
    
]);

// root.render(<Applayout />);
root.render(<RouterProvider router={appRouter} />);
