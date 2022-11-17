import Cards from "./Cards";

//the cardValues are mapped using the cards component which uses the card component
//the css was all done in the index.js

function App() {
  return (
    <div className="App">
      <h1>Fortnite Memory Game</h1>
      <p>
        <button onClick={() => window.location.reload(false)}>
          Start a New Game
        </button>
      </p>
      <Cards />
    </div>
  );
}

export default App;
