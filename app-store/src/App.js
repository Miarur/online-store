import React, { useMemo, useState } from "react";
import "./styles/App.css";
import CardList from "./components/CardList/CardList";
import axios from "axios";
import data from "./API/data.json";
import SortSelect from "./components/UI/select/SortSelect";
import SearchField from "./components/UI/input/SearchField";

function App() {
  const [cards, setCards] = useState(data.sku);

  //состояние + двухсторонне связывание для сортировки
  const [selectedSort, setSelectedSort] = useState("");

  // состояние для поиска
  const [searchQuery, setSearchQuery] = useState('')

  //обновляю состояние карточек
  const updateStateCards = (sort) => {
    console.log(sort)
    if(sort) {
      setSelectedSort(sort);
    } else {
      return sort
    }
  };

  const getSortedCards = useMemo( () => {
    console.log(selectedSort)
    if(selectedSort === 'nameUp') {
      return [...cards].sort((a, b) => a.name.localeCompare(b.name))
    } else if(selectedSort === 'nameDown') {
      return [...cards].sort((a, b) => b.name.localeCompare(a.name))
    } else if(selectedSort === 'priceUp') {
      return [...cards].sort((a, b) => a.price - b.price);
    } else if(selectedSort === 'priceDown') {
      return [...cards].sort((a, b) => b.price - a.price)
    } else if(selectedSort === 'yearUp') {
      return [...cards].sort((a, b) => a.year - b.year);
    } else if(selectedSort === 'yearDown') {
      return [...cards].sort((a, b) => b.year - a.year);
    } else {
      return cards
    }
  }, [selectedSort, cards])

  const SortingWithSearch = useMemo(() => {
    return getSortedCards.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, getSortedCards])


  return (
    <div className="App wrapper">
      <div className="instrument">
        <SortSelect
          value={selectedSort}
          onChange={updateStateCards}
          defaultValue={"Сортировка..."}
          options={[
            { value: "nameUp", name: "По названию, от A - Z" },
            { value: "nameDown", name: "По названию, от Z - A" },
            { value: "priceUp", name: "По цене, сначала дешевле" },
            { value: "priceDown", name: "По цене, сначала дороже" },
            { value: "yearUp", name: "По дате выхода, по возрастанию" },
            { value: "yearDown", name: "По дате выхода, по убыванию" },
          ]}
        />

        <SearchField 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Поиск..."
         />
      </div>
      <CardList cards={SortingWithSearch}></CardList>
    </div>
  );
}

export default App;
