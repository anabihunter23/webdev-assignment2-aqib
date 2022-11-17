import { useState } from "react";
import Card from "./Card";
//images didnt load
//import Leia from "./assets/Leia.jpg";
//import Mj from "./assets/Mj.jpg";
//import Rick from "./assets/Rick.jpg";
//import Vegeta from "./assets/Vegeta.jpg";

function Cards() {
  const [previousCard, setPreviousCard] = useState(-1);
  const [cards, setCards] = useState(
    [
      //4 unique cards, with 2 duplicates each
      { id: 1, img: "Leia Card Placeholder", status: "" },
      { id: 1, img: "Leia Card Placeholder", status: "" },
      { id: 2, img: "Mj Card Placeholder", status: "" },
      { id: 2, img: "Mj Card Placeholder", status: "" },
      { id: 3, img: "Rick Card Placeholder", status: "" },
      { id: 4, img: "Rick Card Placeholder", status: "" },
      { id: 4, img: "Vegeta Card Placeholder", status: "" },
      { id: 4, img: "Vegeta Card Placeholder", status: "" },
    ].sort(() => Math.random() - 0.5) //shuffles the array
  );

  function checkCards(currentCard) {
    if (cards[currentCard].id == cards[previousCard].id) {
      //cards are a match
      cards[currentCard].status = "correct";
      cards[previousCard].status = "correct";
      setCards([...cards]);
      setPreviousCard(-1);
    } else {
      //cards arent a match
      cards[currentCard].status = "incorrect";
      cards[previousCard].status = "incorrect";
      setCards([...cards]);
      //after 1 second, the selected cards are reset
      setTimeout(() => {
        cards[currentCard].status = "";
        cards[previousCard].status = "";
        setCards([...cards]);
        setPreviousCard(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (previousCard === -1) {
      cards[id].status = "active";
      setCards([...cards]);
      setPreviousCard(id); //previous card gets set to clicked card
    } else {
      //some card has already been clicked
      //so we have to check if the card are the same
      checkCards(id);
    }
  }

  return (
    <div className="container">
      {cards.map((card, index) => (
        <Card key={index} card={card} handleClick={handleClick} id={index} />
      ))}
    </div>
  );
}

export default Cards;
