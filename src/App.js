import Header from "./Components/Header";
import Main from "./Components/Main";

import { useState } from "react";
import Footer from "./Components/Footer";
function App() {
  const [visibility, setVisibility] = useState(false);

  const showMenu = () => {
    setVisibility(!visibility);
  };
  return (
    <>
      <Header showMenu={showMenu} visibility={visibility} />
      <Main />
      <Footer/>
    </>
  );
}

export default App;
