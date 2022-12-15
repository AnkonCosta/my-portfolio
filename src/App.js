import "./App.css";
import Main from "./layouts/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);

  return (
    <div className="bg-[#212428] min-h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
