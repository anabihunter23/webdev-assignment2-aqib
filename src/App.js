import Cards from "./Cards";

function App() {
  //const cardValues = ["Card1", "Card2", "Card3", "Card4"];
  return (
    <div className="App">
      <h1>Fortnite Memory Game</h1>
      {/* class example code
      {cardValues.map((item, idx) => (
        <Card key={idx} cardText={item} />
      ))} */}
      <Cards />
    </div>
  );
}

export default App;
