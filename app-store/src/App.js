import React, {useState} from 'react';
import './styles/App.css';
import CardList from './components/CardList/CardList';
import axios from 'axios';
import data from './API/data.json';


function App() {

  const [cards, setCards] = useState(data.sku);

  return (
    <div className="App wrapper">
      <CardList cards={cards}></CardList>
    </div>
  );
}

export default App;
