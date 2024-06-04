import { useEffect } from 'react';
import './App.css';
import Header from "./Components/Header";
import Button from "./Components/Buttons/Button";

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready();
  }, [ ])

  const onToggleButton = () =>{
    if(tg.MainButton.isVisivle){
        tg.MainButton.hide();
    }else{
        tg.MainButton.show();
    }
}

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
