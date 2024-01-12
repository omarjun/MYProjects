import React from 'react';

function Person(props) {
  return (
    <>
      <p>
        Name: {props.name}
      </p>
      <p>
        Age: {props.age}
      </p>
    </>
  );
}

export default Person;
