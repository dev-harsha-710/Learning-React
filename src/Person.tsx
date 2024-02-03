import React from "react";
import { PersonObject } from "./PersonInterface";

interface MyComponentProps {
  person: PersonObject;
}
const Person: React.FC<{ person: PersonObject }> = ({ person }) => {
  return (
    <h3>
      My name is {person.name}..I am {person.age}, years old. I have{" "}
      {person.skills} skills.
    </h3>
  );
};
export default Person;
