import { useState } from "react";
import Card from "./Card";

function Cards() {
  const [items, setItems] = useState([
    //4 unique items, with 2 duplicates since each item needs to match with another
    { id: 1, img: "/assets/leia.jpg", status: "" },
    { id: 1, img: "/assets/leia.jpg", status: "" },
    { id: 2, img: "/assets/mj.jpg", status: "" },
    { id: 2, img: "/assets/mj.jpg", status: "" },
    { id: 3, img: "/assets/rick.jpg", status: "" },
    { id: 4, img: "/assets/rick.jpg", status: "" },
    { id: 4, img: "/assets/vegeta.jpg", status: "" },
    { id: 4, img: "/assets/vegeta.jpg", status: "" },
  ]);
  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
}

export default Cards;
