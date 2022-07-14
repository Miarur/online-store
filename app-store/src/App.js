import React, {useState} from 'react';
import './styles/App.css';
import CardList from './components/CardList/CardList';
import axios from 'axios';
import data from './API/data.json';
import SortSelect from './components/UI/select/SortSelect';


function App() {

  const [cards, setCards] = useState(data.sku);

  //состояние + двухсторонне связывание для сортировки
  const [selectedSort, setSelectedSort] = useState('')

  //функция сортировки
  const sortCards = (sort) => {
    setSelectedSort(sort);
    setCards([...cards].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (    
    <div className="App wrapper">
      <div>
        <SortSelect
          value={selectedSort}
          onChange={sortCards}
          defaultValue={'Сортировка...'}
          options={[
            {value: 'name', name: 'По названию, от A - Z'},
            // {value: 'name', name: 'По названию, от Z - A'},
            {value: 'year', name: 'По дате выхода, по возрастанию'},
            // {value: 'year', name: 'По дате выхода, по убыванию'}
          ]}
        />
      </div>
      <CardList cards={cards}></CardList>
    </div>
  );
}

export default App;
