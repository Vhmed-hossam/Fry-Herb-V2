import React from "react";
import { Button } from "@heroui/react";
export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center maincontent">
      <header className="  py-20 w-full text-primary">
        <div className="w-fit mx-auto"></div>
        <h1 className="text-4xl font-bold">Hello </h1>
        <h1 className="text-4xl font-bold flex ">
          Welcome to Fry/Herb <p className="text-lg font-bold ">Version 2</p>
        </h1>
        <p className="mt-2 text-lg">
          Fry&Herb is a comprehensive website dedicated to providing a wide
          array of food recipes. Our mission is to make cooking easy, enjoyable,
          and accessible to everyone. Whether you're a beginner or an
          experienced cook, you'll find something to inspire you in our vast
          collection of carefully curated recipes. We offer step-by-step cooking
          guides and practical tips to help you create delicious meals with
          ease.
        </p>
      </header>

      <section className="p-12 bg-gray/25 rounded-lg">
        <h2 className="text-2xl font-semibold">About the Developer</h2>
        <p className="mt-2">
          Hi, I'm Vhmed, a passionate front-end developer dedicated to crafting
          amazing user experiences.
        </p>
        <div className="mt-4 flex justify-between">
          <a href="https://github.com/Vhmed-hossam" target="_blank">
            {" "}
            <Button color="primary" className="px-6" variant="ghost">
              GitHub
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-hossam-81260634a/"
            target="_blank"
          >
            {" "}
            <Button color="primary" className="px-6" variant="ghost">
              LinkedIn
            </Button>
          </a>
          <a href="https://www.behance.net/Ahmed_Hossam16" target="_blank">
            {" "}
            <Button color="primary" className="px-6" variant="ghost">
              Behance
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
