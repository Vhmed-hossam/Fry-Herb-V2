import axios from "axios";
import { useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BackIcon, CloseIcon, Worldnet } from "../../icons/icons";
import { Button } from "@heroui/react";

export default function AreaDet() {
    const [DetailsfromA, setDetailsfromA] = useState([])
    useEffect(() => {
      
        GetAreaMeals()
    }, [])
    
  let { strArea } = useParams();
  async function GetAreaMeals() {
    const res = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?a=${strArea}`);
    setDetailsfromA(res.data.meals);
  }
  return (
    <div className="maincontent">
        <Button as={Link} to={-1} color="primary" variant="bordered" isIconOnly className="mb-5"><BackIcon/></Button>
      <h1 className="hh1">{strArea}</h1>
      <div className="meals">
        {DetailsfromA.map((item) => (
            
          <div className="cardmeal" key={item.idMeal}>
            <div className="imgcon">
              <img src={item.strMealThumb} />
            </div>
            <h2 className="lineclamp">{item.strMeal}</h2>
            <h5 className="areah5">
              <Worldnet />
              {strArea}
            </h5>
            <Button color="primary" variant="ghost" as={Link} to={`/meals/${item.idMeal}`}>
              View Full Meal
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
