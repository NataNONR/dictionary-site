import Dictionary from "./Dictionary";
import logo from "./d_logo_white.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>

        <main>
          <h1 className="Main-content">Dictionary</h1>
          <Dictionary defaultKeyword="peace" />
        </main>
        <footer className="App-footer">
          <p>
            <a
              href="https://github.com/NataNONR/dictionary-site"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by
            <a
              href="https://musing-ride-b4194f.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Nattha Oroz
            </a>
            | hosted on
            <a
              href="https://youthful-hamilton-8e1129.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
