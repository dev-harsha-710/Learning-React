import React from "react";

interface Props {
  props: Function;
}

const Child = (props: Props) => {
  return (
    <div>
      <button onClick={() => props.props("Hi this is Message from CHILD")}>
        Say Hi To Parent
      </button>
    </div>
  );
};
export default Child;
