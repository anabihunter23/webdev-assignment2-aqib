import { useState } from "react";
import Card from "./Card";

function Cards() {
  const [previousCard, setPreviousCard] = useState(-1);
  const [cards, setCards] = useState(
    [
      //4 unique cards, with 2 duplicates each
      {
        id: 1,
        img: "/img/Leia.png",
        status: "",
        disabled: false,
      },
      {
        id: 1,
        img: "/img/Leia.png",
        status: "",
        disabled: false,
      },
      {
        id: 2,
        img: "/img/Mj.png",
        status: "",
        disabled: false,
      },
      {
        id: 2,
        img: "/img/Mj.png",
        status: "",
        disabled: false,
      },
      {
        id: 3,
        img: "/img/Rick.png",
        status: "",
        disabled: false,
      },
      {
        id: 3,
        img: "/img/Rick.png",
        status: "",
        disabled: false,
      },
      {
        id: 4,
        img: "/img/Vegeta.png",
        status: "",
        disabled: false,
      },
      {
        id: 4,
        img: "/img/Vegeta.png",
        status: "",
        disabled: false,
      },
    ].sort(() => Math.random() - 0.5) //shuffles the array of cardsZ
  );

  function checkCards(currentCard) {
    if (
      //checks for matched cards
      cards[currentCard].id === cards[previousCard].id
    ) {
      //if the cards match, their status gets changed and they also get disabled
      cards[currentCard].status = "correct";
      cards[previousCard].status = "correct";
      cards[currentCard].disabled = "true";
      cards[previousCard].disabled = "true";
      setCards([...cards]);
      setPreviousCard(-1);
      //if all card ids have "correct" status, meaning a match, then you win
      if (
        cards[0].status === "correct" &&
        cards[1].status === "correct" &&
        cards[2].status === "correct" &&
        cards[3].status === "correct" &&
        cards[4].status === "correct" &&
        cards[5].status === "correct" &&
        cards[6].status === "correct" &&
        cards[7].status === "correct"
      ) {
        alert("Congratulations, you won the game");
      }
    } else {
      //cards arent a match
      cards[currentCard].status = "incorrect";
      cards[previousCard].status = "incorrect";
      //disable all cards temporarily (until timeout is over)
      cards[0].disabled = "true";
      cards[1].disabled = "true";
      cards[2].disabled = "true";
      cards[3].disabled = "true";
      cards[4].disabled = "true";
      cards[5].disabled = "true";
      cards[6].disabled = "true";
      cards[7].disabled = "true";
      setCards([...cards]);

      setTimeout(() => {
        //the status of the two selected cards is reset
        cards[currentCard].status = "";
        cards[previousCard].status = "";
        //all remaining cards are no longer disabled
        //theres probably a better way to do this and my code above, by looping
        //through the array, but this is how i got it done
        if (cards[0].status === "") {
          cards[0].disabled = "false";
        }
        if (cards[1].status === "") {
          cards[1].disabled = "false";
        }
        if (cards[2].status === "") {
          cards[2].disabled = "false";
        }
        if (cards[3].status === "") {
          cards[3].disabled = "false";
        }
        if (cards[4].status === "") {
          cards[4].disabled = "false";
        }
        if (cards[5].status === "") {
          cards[5].disabled = "false";
        }
        if (cards[6].status === "") {
          cards[6].disabled = "false";
        }
        if (cards[7].status === "") {
          cards[7].disabled = "false";
        }
        setCards([...cards]);
        setPreviousCard(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    //if the card is disabled (ex.selected, or matched) do nothing
    if (cards[id].disabled === "true") {
      return;
    }
    //otherwise we set the current card to active and disable it temporarily
    else {
      if (previousCard === -1) {
        cards[id].status = "active";
        cards[id].disabled = "true";
        setCards([...cards]);
        setPreviousCard(id); //previous card gets set to clicked card
      } else {
        //some card has already been clicked
        //so we have to check if the card are the same
        checkCards(id);
      }
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
