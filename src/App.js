import { useEffect } from 'react';
import './App.css';
import Header from "./Components/Header";
import Button from "./Components/Buttons/Button";
import { useTgHook } from './Hooks/useTgHook';

function App() {
  const {onToggleButton , tg} = useTgHook

  useEffect(() => {
    tg.ready();
  }, [ ])


  return (
    <div className="App">
      <button onClick={onToggleButton} className='button'>Toggle</button>
    </div>
  );
}

export default App;
