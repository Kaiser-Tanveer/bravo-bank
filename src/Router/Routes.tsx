import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AccountDetails from "../Pages/AccountsDetails/AccountDetails";
import CardsDetails from "../Pages/CardsDetails/CardsDetails";
import Home from "../Pages/HomePage/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://bravo-bank-server.vercel.app/accountsTypes"),
      },
      {
        path: "/accountDetail/:accountType",
        element: <AccountDetails />,
      },
      {
        path: "/cardDetail/:cardType",
        element: <CardsDetails />,
        // loader: (params) => fetch(`http://localhost:5000/cards/${params.id}`),
      },
    ],
  },
]);
