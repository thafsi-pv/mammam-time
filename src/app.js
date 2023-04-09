import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { GeoProvider } from "./contexts/GeoContext";

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
    ],
  },
  { path: "resmenu", element: <ResMenu /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={AppRouter} />
);
//root.render(<AppLayout />);
