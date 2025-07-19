
import React from "react";

const Student = ({ name, roll, grade, city }) => {
  return (
    <div className="cont">
      <h2>Student Name: {name}</h2>
      <h3>Roll No: {roll}</h3>
      <h3>Grade: {grade}</h3>
      <h3>City: {city}</h3>
    </div>
  );
};

export default Student;
