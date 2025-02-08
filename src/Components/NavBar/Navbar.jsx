import React, { useState, useEffect } from "react";
import Image from "../../Images/Fry&Herb web logo.png";
import { NavLink } from "react-router-dom";
import { Button, Switch } from "@heroui/react";
import { MoonIcon, SunIcon } from "../../icons/icons";
import { Plate, CloseIcon, Toggleicon } from "../../icons/icons";

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
    document.documentElement.classList.toggle("overflow-hidden");
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div
        className={`fixed-navbar ${
          isNavbarVisible ? "translate-x-0" : "-translate-x-full"
        } flex flex-col justify-between`}
      >
        <div>
          <button className="close-button" onClick={toggleNavbar}>
            <CloseIcon />
          </button>
          <div className="logo">
            <img src={Image} alt="Fry & Herb Logo" />
          </div>
          <div className="nav-buttons">
            <div>
              <Button className="nav-button" as={NavLink} to={"/meals"}>
                <Plate />
                <h4>Meals</h4>
              </Button>
            </div>
            <div>
              <Button className="nav-button" as={NavLink} to={"/ingredients"}>
                <Plate />
                <h4>Ingredients</h4>
              </Button>
            </div>
            <div>
              <Button className="nav-button" as={NavLink} to={"/area"}>
                <Plate />
                <h4>Areas</h4>
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <Switch
            isSelected={isDarkMode}
            color="primary"
            size="lg"
            className=""
            onChange={toggleDarkMode}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          ></Switch>
        </div>
      </div>
      {isNavbarVisible && (
        <div className="overlay" onClick={toggleNavbar}></div>
      )}
      <button className="toggle" onClick={toggleNavbar}>
        <Toggleicon />
      </button>
    </>
  );
}
