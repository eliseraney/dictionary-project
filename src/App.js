import "./App.css";
import Dictionary from "./Dictionary";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="book-icon">
            <FontAwesomeIcon icon={faBook} />
          </div>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <div className="github-icon">
            <a href="https://github.com/eliseraney">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
