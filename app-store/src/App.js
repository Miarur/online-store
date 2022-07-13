import React, {useState} from 'react';
import './styles/App.css';
import CardItem from './components/CardItem/CardItem';


function App() {

  const [cards, setCards] = useState([
    {
      name:'Iphone 13',
      img: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg', 
      quantity: '12', 
      year: '2021', 
      producer: 'Apple', 
      color: 'black', 
      quantityCamers: 3,
      popularity: 'yes', 
    }, 

    {
      name:'Iphone 11',
      img: 'https://content2.onliner.by/catalog/device/header/b9fefc8c8f96dbc21492792f3a1a502d.jpeg', 
      quantity: '10', 
      year: '2020', 
      producer: 'Apple', 
      color: 'black', 
      quantityCamers: 3,
      popularity: 'no', 
    }, 

  ]);

  return (
    <div className="App wrapper">
      {cards.map((card) =>
        <CardItem card={card} key={card.name}></CardItem>
      )}
    </div>
  );
}

export default App;
