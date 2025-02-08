import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import Image from "../../Images/WEB BIG MAIN.png";

export default function Ingredientscard({ meal }) {
  const defaultContent = (
    <>
      <div>
        <p>{meal.strDescription}</p>
      </div>
    </>
  );
  return (
    <>
      <Accordion>
        <AccordionItem
          key={meal.idIngredient}
          aria-label={meal.idIngredient}
          title={meal.strIngredient}
          startContent={<img src={Image} />}
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </>
  );
}
