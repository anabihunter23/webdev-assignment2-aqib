function Card({ card, id, handleClick }) {
  const cardStatus = card.status ? "active " + card.status : "";

  return (
    <div className={"card" + cardStatus} onClick={() => handleClick(id)}>
      <img src={card.img} alt="Not Loading" />
    </div>
  );
}

export default Card;
