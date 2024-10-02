import { createContext, useState } from "react";
import ChildA from "./components/ChildA";
import './App.css'
// step 1: create context
const themeContext = createContext();

//step 2: wrap all the childs with the provider
//step 3: Pass the values
//step 4 : use in the consumer
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <themeContext.Provider value={{theme , setTheme}}>
        <div style={{ backgroundColor: theme === 'light' ? 'beige' : 'black'}} id="container">
          <ChildA />
        </div>
      </themeContext.Provider>
    </>
  );
}

export default App;
export { themeContext };
