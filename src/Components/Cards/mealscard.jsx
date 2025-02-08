import React from "react";
import { Worldnet } from "../../icons/icons";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

export default function mealscard({ meal }) {
  return (
    <div className="cardmeal">
      <div className="imgcon">
        <img src={meal.strMealThumb} />
      </div>
      <h2 className="lineclamp">{meal.strMeal}</h2>
     {meal.strCategory &&  <h5 className="areah5">
        <Worldnet />
        {meal.strArea}
      </h5>}
      <Button color="primary" variant="ghost" as={Link} to={`/meals/${meal.idMeal}`}>
        View Full Meal
      </Button>
    </div>
  );
}