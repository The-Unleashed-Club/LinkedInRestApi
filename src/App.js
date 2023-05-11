import Loginpage from "./components/Loginpage";
import Signup from "./components/Signup";
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
        {show ? <Portfolio /> : <Signup setShow={setShow} />}
      </div>
      ;
    </>
  );
}

export default App;
