import Login from './components/Login';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <Login/>
    <Footer/>
    </div>
  );
}

export default App;


// import Loginpage from "./components/Loginpage";
// import Portfolio from "./pages/Portfolio";
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <div className="App">
//         {show ? <Portfolio /> : <Loginpage setShow={setShow} />}
//       </div>
//       ;
//     </>
//   );
// }

// export default App;
