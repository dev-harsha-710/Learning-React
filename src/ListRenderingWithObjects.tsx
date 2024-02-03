import React from "react";
import Person from "./Person";
import { PersonObject } from "./PersonInterface";

const ListRenderingWithObjects = () => {
  const persons: PersonObject[] = [
    {
      id: 1,
      name: "Harsha",
      age: 19,
      skills: "FullStack Developer",
    },
    {
      id: 2,
      name: "Urmi",
      age: 22,
      skills: "Fashion Designing",
    },
    {
      id: 3,
      name: "Gaytri",
      age: 32,
      skills: "Cooking",
    },
    {
      id: 4,
      name: "Monica",
      age: 29,
      skills: "Business Leading",
    },
    {
      id: 5,
      name: "Bhairavi",
      age: 26,
      skills: "Teaching",
    },
  ];

  let personList = persons.map((person: PersonObject) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
};

export default ListRenderingWithObjects;
