import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">🔍📔</header>
        <main>
          <Dictionary defaultKeyword="peace" />
        </main>
        <footer className="App-footer">Coded by Nattha Oroz</footer>
      </div>
    </div>
  );
}

export default App;
