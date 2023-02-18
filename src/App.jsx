import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Card } from "./../index";
// import './App.css'
// import theme from "./constants/theme";
// console.log(theme);
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa voluptate quaerat odio tempore, tempora sapiente voluptatum vel
        asperiores error, labore, maiores at magnam rem! Eos accusamus ea quaerat aspernatur?
      </Card>
    </div>
  );
}

export default App;
