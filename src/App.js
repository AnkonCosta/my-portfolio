import logo from "./logo.svg";
import "./App.css";
import Main from "./layouts/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

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
        {
          path: "/about",
          element: <Resume></Resume>,
        },
        {
          path: "/skills",
          element: <Skills></Skills>,
        },
        {
          path: "/projects",
          element: <Projects></Projects>,
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
