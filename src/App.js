import { useState } from "react";
import imgBulbOff from "./img/light-bulb-off.png";
import imgBulbOn from "./img/light-bulb-on.png";

function App() {
  const [bulbOn, setBulbOn] = useState(false);
  
  return (
    <>
      <h1>Bulbs</h1>
      <div>
        <img src={bulbOn ? imgBulbOff : imgBulbOn} alt="bulb" width={500}/>
        <button onClick={() => setBulbOn(!bulbOn)}>{bulbOn ? 'Turn Off' : 'Turn On'}</button>
      </div>
    </>
  );
}

export default App;
