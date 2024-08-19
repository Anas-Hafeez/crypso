import React from "react";
import Card from "../components/Card"



const Cards = ({ data, checker }) => {

console.log(data);
  return (
    <div className="grid grid-cols-1 gap-4 p-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {data.map((elementOfArray) => {
        return <Card key={elementOfArray} item={elementOfArray}  checker={checker} />;
      })}
              
    </div>
  );
};

export default Cards;