
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./Pages/Support/Support";
import TransactionPage from "./Pages/Transaction/Transaction";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);
function App() {
  return (
   <>
   <RouterProvider router={router} />
   </>
  );
}

export default App;
