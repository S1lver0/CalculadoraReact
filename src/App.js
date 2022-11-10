import React, {useState} from 'react';
import './App.css';
import { Panelbotones } from './components/panelBotones';
import { Screen } from './components/screen';

export const App = () => {

  const [num,setNum] = useState(0);



  return (
    <div className="App">
      <Screen valor={num}/>
      <Panelbotones/>
    </div>
  );
}


