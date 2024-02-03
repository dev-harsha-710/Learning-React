import React, { useState } from "react";
import Child from "./child";

const Parent = () => {
  function greet(parm: string) {
    console.log("Message from child:", parm);
  }

  return <Child props={greet} />;
};

export default Parent;
