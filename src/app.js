import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { GeoProvider } from "./contexts/GeoContext";
import SignIn from "./components/SIgnIn";
import Offers from "./components/Offers";
import Search from "./components/Search";

const AppLayout = () => {
  return (
    <>
      <GeoProvider>
        <Header />
        <Outlet />
        <Footer />
      </GeoProvider>
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/resmenu/:id",
        element: <ResMenu />,
      },
      { path: "/offers", element: <Offers /> },
      {path:"/search",element:<Search/>}
    ],
  },
  { path: "/signin", element: <SignIn /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
//root.render(<AppLayout />);
