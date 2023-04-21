import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35Z" fill="white"/>
        <path d="M57 34.5C57 46.3741 47.3741 56 35.5 56C23.6259 56 14 46.3741 14 34.5C14 22.6259 23.6259 13 35.5 13C47.3741 13 57 22.6259 57 34.5Z" fill="#2D2D2D"/>
        <path d="M52 34.5C52 43.6127 44.3889 51 35 51C35 44.4 35 43.6127 35 34.5C35 25.3873 35 24.9667 35 18C44.3889 18 52 25.3873 52 34.5Z" fill="white"/>
        </svg>
        <a
          className="App-link"
          href="https://github.com/The-Unleashed-Club/LinkedInRestApi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Link
        </a>
      </header>
    </div>
  );
}

export default App;
