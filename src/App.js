import { useEffect } from 'react';
import './App.css';
import Header from "./Components/Header";
import Button from "./Components/Buttons/Button";
import { useTgHook } from './Hooks/useTgHook';

const tg = window.Telegram.WebApp

function App() {

  const {onToggleButton } = useTgHook

  useEffect(() => {
    tg.ready();
  }, [ ])


  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
