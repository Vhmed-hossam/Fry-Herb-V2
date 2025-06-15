import { HeroUIProvider } from "@heroui/react";
import Meals from "./Pages/Meals/Meals";
import Ingredients from "./Pages/Ingredients/Ingredients";
import Area from "./Pages/Areas/area";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Details from "./Pages/Details/Details";
import AreaDet from "./Pages/AreaDetails/AreaDet";
import Landing from "./Pages/Landing/Landing";
import NotFound from "./NotFound/Notfound";
export default function App() {
  console.log("Stop!");
  console.log(`
This is a browser feature intended for developers.`);
  const routebest = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Landing /> },
        { path: "meals", element: <Meals /> },
        { path: "area", element: <Area /> },
        { path: "ingredients", element: <Ingredients /> },
        { path: "*", element: <NotFound /> },
        { path: "meals/:idMeal", element: <Details /> },
        { path: "meals/category/:strCategory", element: <Meals /> },
        { path: "area/:strArea", element: <AreaDet /> },
      ],
    },
  ]);
  return (
    <>
      <HeroUIProvider>
        <RouterProvider router={routebest}></RouterProvider>
      </HeroUIProvider>
    </>
  );
}
