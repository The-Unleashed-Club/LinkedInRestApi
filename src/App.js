import Loginpage from "./components/Loginpage";
import Portfolio from "./pages/Portfolio";
import "./App.css";
import { useState } from "react";

          // Signed in 
          // test username and password are 
          // admin@admin.in
          // password 

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="App">
        {show ? <Portfolio /> : <Loginpage setShow={setShow} />}
      </div>
      ;
    </>
  );
}

export default App;
