import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
// import Mart from "./src/components/Mart.js";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import RestaurantPage from "./src/components/RestaurantPage.js"; 

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};

const Mart = lazy(()=>import("./src/components/Mart.js"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/mart",
        element: <Suspense fallback={<h1>Loading ....</h1>}><Mart /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:ResId",
        element: <RestaurantPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
