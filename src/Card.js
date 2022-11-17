function Card(card, id, handleClick) {
  const cardStatus = card.status ? "active " + card.status : "";

  return (
    <div className={"card" + cardStatus} onClick={() => handleClick(id)}>
      {card.img}
    </div>
  );
}

export default Card;
