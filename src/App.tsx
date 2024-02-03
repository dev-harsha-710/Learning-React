import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./component/Functional";
import ClassComponent from "./component/ClassComponent";
import Counter from "./Counter";
import CounterFunctional from "./CounterFunctional";
import ConditionalRendering from "./ConditionalRendering";
import ListRenderingWithObjects from "./ListRenderingWithObjects";
import Person from "./Person";
import { EventHandling } from "./EventHandling";
import Parent from "./ComponentCommunication/Parent";
import FormHandling from "./component/FormHandling";
function App() {
  return (
    <div className="App">
      <FormHandling />
    </div>
  );
}

export default App;
