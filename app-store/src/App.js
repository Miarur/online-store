import React, { useMemo, useState } from "react";
import "./styles/App.css";
import CardList from "./components/CardList/CardList";
import axios from "axios";
import data from "./API/data.json";
import SearchAndSort from "./components/SearchAndSort/SearchAndSort";

function App() {
  const [cards, setCards] = useState(data.sku);
  const [sortValue, setSearchAndSortValue] = useState({sortMethod: '', searchLine: ''})


  const getSortedCards = useMemo( () => {
    console.log(sortValue)
    if(sortValue.sortMethod === 'nameUp') {
      return [...cards].sort((a, b) => a.name.localeCompare(b.name))
    } else if(sortValue.sortMethod === 'nameDown') {
      return [...cards].sort((a, b) => b.name.localeCompare(a.name))
    } else if(sortValue.sortMethod === 'priceUp') {
      return [...cards].sort((a, b) => a.price - b.price);
    } else if(sortValue.sortMethod === 'priceDown') {
      return [...cards].sort((a, b) => b.price - a.price)
    } else if(sortValue.sortMethod === 'yearUp') {
      return [...cards].sort((a, b) => a.year - b.year);
    } else if(sortValue.sortMethod === 'yearDown') {
      return [...cards].sort((a, b) => b.year - a.year);
    } else {
      return cards
    }
  }, [sortValue.sortMethod, cards])

  const SortingWithSearch = useMemo(() => {
    return getSortedCards.filter((item) => item.name.toLowerCase().includes(sortValue.searchLine.toLowerCase()))
  }, [sortValue.searchLine, getSortedCards])


  console.log(cards.length);
  return (
    <div className="App wrapper">
      <SearchAndSort sortValue={sortValue} setSearchAndSortValue={setSearchAndSortValue}/>

      {SortingWithSearch.length
        ? <CardList cards={SortingWithSearch}></CardList>
        : <h1 className="warning">Товары не найдены</h1>
      }
    </div>
  );
}

export default App;
