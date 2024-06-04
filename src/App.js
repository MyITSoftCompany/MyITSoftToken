import { useEffect } from 'react';
import './App.css';
import Header from "./Components/Header";
import Button from "./Components/Buttons/Button";

const tg = window.Telegram.WebApp

function App() {

  useEffect(() => {
    tg.ready();
  }, [ ])

  const onClose = () =>{
    tg.close()
  }

  return (
    <div className="App">
      <Header />
      <Button />
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
