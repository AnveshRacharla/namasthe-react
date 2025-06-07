import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";

const Grocery = lazy(()=>import("./src/components/Grocery"));

const AppLayout=()=>{
    return(
        <div className="">
            <Header/>
            <Outlet/>
        </div>
    )
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Body /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery />
            </Suspense>
          ),
        },
        { path: "/restaurants/:resId", element: <RestaurantMenu /> },
      ],
      errorElement: <Error />,
    },
  ],
  {
    basename: process.env.NODE_ENV === "production" ? "/namasthe-react" : "/",
  }
);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);