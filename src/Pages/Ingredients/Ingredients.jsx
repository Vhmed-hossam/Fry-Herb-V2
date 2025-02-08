import { Button, Spinner } from "@heroui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Ingredientscard from "../../Components/Cards/Ingredientscard";

export default function Ingredients() {
  useEffect(() => {
    GetIngredients();
  }, []);

  const [Ingr, setIngr] = useState([]);
  const [visibleCount, setVisibleCount] = useState(60);

  async function GetIngredients() {
    try {
      const res = await axios.get(
        "https://themealdb.com/api/json/v1/1/list.php?i=list"
      );
      setIngr(res.data.meals);
    } catch (error) {
      console.log(error);
    } 
  }

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 60);
  };

  if (Ingr.length === 0) {
    return (
      <div className="maincontent">
        <div className="loading">
          <Spinner />
        </div>
      </div>
    );
  }
  return (
    <div className="maincontent">
      <h1 className="hh1">Learn, Choose, Prepare Your Ingredients</h1>
      <div className="ingredients">
        {Ingr.slice(0, visibleCount).map((meal, index) => (
          <div key={index} className="ingredientscard">
            <Ingredientscard meal={meal} />
          </div>
        ))}
      </div>
      {visibleCount < Ingr.length && (
        <div className="showmore" onClick={showMore}>
          <p className="hh1">Show More...</p>
        </div>
      )}
    </div>
  );
}
