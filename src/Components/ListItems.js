import React from "react";
import Button from "./Button";

const ListItems = ({visibility}) => {
  return (
    <ul className={`menu ${visibility===true? "show-menu" : "hide-menu"}`}>
      <li>Ecosystem</li>
      <li>Lauchpad</li>
      <li>Education</li>
      <li>Roadmap</li>
      <li>Docs</li>
      <Button text="Launch App"/>
    </ul>
  );
};

export default ListItems;
