import { useState } from "react";

import Dashboard from "./Components/Dashboard";
function App() {
  const [visibility, setVisibility] = useState(false);

  const showMenu = () => {
    setVisibility(!visibility);
  };
  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
