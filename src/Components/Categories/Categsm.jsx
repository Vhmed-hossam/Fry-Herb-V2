import React, { useEffect, useState } from "react";
import axios from "axios";
import Categoriesdiv from "./Categoriesdiv";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@heroui/react";
export default function Categsm({ GetMealsBycat, GetMeals }) {
  const [Cats, setCats] = useState([]);
  const location = useLocation();

  useEffect(() => {
    GetCategories();
  }, []);

  async function GetCategories() {
    try {
      const res = await axios.get(
        "https://themealdb.com/api/json/v1/1/list.php?",
        {
          params: {
            c: "list",
          },
        }
      );
      setCats(res.data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="maincategory">
        <Button
          className="Categoriesdiv"
          as={NavLink}
          to={`/meals/category/all`}
          onPress={() => {
            GetMeals();
          }}
          
        >
          All
        </Button>
        {Cats.map((item, index) => (
          <Button
            key={index}
            className="Categoriesdiv"
            as={NavLink}
            to={`/meals/category/${item.strCategory}`}
            onPress={() => GetMealsBycat(item.strCategory)}
          >
            <Categoriesdiv item={item.strCategory} />
          </Button>
        ))}
      </div>
    </>
  );
}
