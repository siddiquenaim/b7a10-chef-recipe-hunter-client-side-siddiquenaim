import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import SingleChefRecipes from "../pages/SingleChefRecipes/SIngleChefRecipes/SingleChefRecipes";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <SingleChefRecipes></SingleChefRecipes>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://b7a10-chef-recipe-hunter-server-side-siddiquenaim-siddiquenaim.vercel.app/recipes/${params.id}`
          );
        },
      },
    ],
  },
]);
