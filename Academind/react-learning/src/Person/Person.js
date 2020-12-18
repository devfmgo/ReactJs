import React from "react";
const person = (props) => {
  return (
    <div>
      <p>
        I'am {props.name} and Iam {props.age} years old Person!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
