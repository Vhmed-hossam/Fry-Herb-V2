import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ExitIcon, Worldnet, Worldnetsrc, YTube } from "../../icons/icons";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@heroui/react";
export default function Details() {
  const [MealId, setMealId] = useState([]);
  useEffect(() => {
    GetMealId();
  }, []);
  let { idMeal } = useParams();
  async function GetMealId() {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/lookup.php",
        {
          params: {
            i: idMeal,
          },
        }
      );
      console.log(res.data.meals);
      setMealId(res.data.meals);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="maincontent ">
      <div className="p-2">
        <Button isIconOnly color="danger" variant="bordered" as={Link} to={-1}>
          <ExitIcon />
        </Button>
      </div>
      <div className="details">
        <div className="titleandarea">
          <h1>{MealId[0]?.strMeal} </h1>

          <h4 className="areah5">
            <Worldnet />
            {MealId[0]?.strArea}
          </h4>
        </div>

        <div className="p-3 mx-auto">
          <img src={MealId[0]?.strMealThumb} alt="meal image" />
        </div>
        <div className="p-2 my-3">
          <h3 className="border-b border-primary flex flex-row justify-between items-center px-2">
            Instructions:
            <span className=" items-center rounded-md ring-primary bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
              {MealId[0]?.strCategory}
            </span>
          </h3>
          <p className="border-b border-primary py-2">
            {MealId[0]?.strInstructions}
          </p>
        </div>
        <Table
          aria-label="Ingredients and Amounts"
          classNames={{
            wrapper: "thetable",
            th: "theth",
          }}
        >
          <TableHeader aria-label="table with data">
            <TableColumn>Ingredients</TableColumn>
            <TableColumn>Amount</TableColumn>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 20 }, (_, index) => {
              const ingredient = MealId[0]?.[`strIngredient${index + 1}`];
              const measure = MealId[0]?.[`strMeasure${index + 1}`];
              return ingredient && measure ? (
                <TableRow key={index}>
                  <TableCell>{ingredient}</TableCell>
                  <TableCell>{measure}</TableCell>
                </TableRow>
              ) : null;
            })}
          </TableBody>
        </Table>
        <div className="srcbuttons">
          <Button color="danger" variant="ghost" target="_blank" onPress={() => window.location.href = MealId[0]?.strYoutube}>
            <YTube />Youtube
          </Button>
          <Button color="primary" variant="ghost" target="_blank" onPress={() => window.location.href = MealId[0]?.strSource}>
            <Worldnetsrc />Source
          </Button>
        </div>
      </div>
    </div>
  );
}