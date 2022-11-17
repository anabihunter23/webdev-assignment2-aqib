import { useState } from "react";
import Card from "./Card";

function Cards() {
  const [previousCard, setPreviousCard] = useState(-1);
  const [cards, setCards] = useState(
    [
      //4 unique cards, with 2 duplicates each
      { id: 1, img: "/img/Leia.png", status: "" },
      { id: 1, img: "/img/Leia.png", status: "" },
      { id: 2, img: "/img/Mj.png", status: "" },
      { id: 2, img: "/img/Mj.png", status: "" },
      { id: 3, img: "/img/Rick.png", status: "" },
      { id: 3, img: "/img/Rick.png", status: "" },
      { id: 4, img: "/img/Vegeta.png", status: "" },
      { id: 4, img: "/img/Vegeta.png", status: "" },
    ].sort(() => Math.random() - 0.5) //shuffles the array of cardsZ
  );

  function checkCards(currentCard) {
    if (cards[currentCard].id === cards[previousCard].id) {
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
      }, 500);
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
        <Card key={index} card={card} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;
