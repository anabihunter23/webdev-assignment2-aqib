import { useState } from "react";
import Card from "./Card";
import Leia from "./assets/Leia.jpg";
import Mj from "./assets/Mj.jpg";
import Rick from "./assets/Rick.jpg";
import Vegeta from "./assets/Vegeta.jpg";

function Cards() {
  const [items, setItems] = useState([
    //4 unique items, with 2 duplicates since each item needs to match with another
    { id: 1, img: Leia, status: "" },
    { id: 1, img: Leia, status: "" },
    { id: 2, img: Mj, status: "" },
    { id: 2, img: Mj, status: "" },
    { id: 3, img: Rick, status: "" },
    { id: 4, img: Rick, status: "" },
    { id: 4, img: Vegeta, status: "" },
    { id: 4, img: Vegeta, status: "" },
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
