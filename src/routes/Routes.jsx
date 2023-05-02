import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import SingleChefRecipes from "../pages/SingleChefRecipes/SingleChefRecipes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "recipes/:id",
        element: <SingleChefRecipes></SingleChefRecipes>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/recipes/${params.id}`);
        },
      },
    ],
  },
]);
