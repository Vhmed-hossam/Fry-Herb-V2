import React, { useEffect, useState } from "react";
import Categsm from "../../Components/Categories/Categsm";
import axios from "axios";
import Mealscard from "../../Components/Cards/mealscard";
import { useParams } from "react-router-dom";
import { Spinner } from "@heroui/react";
export default function Meals() {
  const { strCategory } = useParams();

  const [Meals, setMeals] = useState([]);
  useEffect(() => {
    if (strCategory) {
      GetMealsBycat(strCategory);
    } else {
      GetMeals();
    }
  }, []);

  async function GetMeals() {
    try {
      const res = await axios.get(
        "https://themealdb.com/api/json/v1/1/search.php?s="
      );
      if (res.data.meals) {
        setMeals(res.data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error);
    } 
  }

  async function GetMealsBycat(category) {
    try {
      const res = await axios.get(
        "https://themealdb.com/api/json/v1/1/filter.php?",
        {
          params: {
            c: category,
          },
        }
      );
      if (res.data.meals) {
        setMeals(res.data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (!Meals) {
    return (
      <div className="maincontent">
        <h1 className="mb-2 hh1">Learn, Cook, Eat Your Food</h1>
        <Categsm GetMealsBycat={GetMealsBycat} GetMeals={GetMeals} />
        <div className="notfound">
          <h1 className="">Meals Not Found</h1>
        </div>
      </div>
    );
  }
  
  return (
    <div className="maincontent">
      <h1 className="mb-2 hh1">Learn, Cook, Eat Your Food</h1>
      <Categsm GetMealsBycat={GetMealsBycat} GetMeals={GetMeals} />
      <div className="meals">
        {Meals.map((meal, index) => (
          <Mealscard key={index} meal={meal} />
        ))}
      </div>
    </div>
  );
}
