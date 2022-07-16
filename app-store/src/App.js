import React, { useState } from "react";
import "./styles/App.css";
import CardList from "./components/CardList/CardList";
import axios from "axios";
import data from "./API/data.json";
import SortSelect from "./components/UI/select/SortSelect";

function App() {
  const [cards, setCards] = useState(data.sku);

  //состояние + двухсторонне связывание для сортировки
  const [selectedSort, setSelectedSort] = useState("");

  //функция сортировки
  const sortCards = (sort) => {
    setSelectedSort(sort)
    switch (sort) {
      case "nameUp":
        return setCards([...cards].sort((a, b) => a.name.localeCompare(b.name)));
      case "nameDown":
        return setCards([...cards].sort((a, b) => b.name.localeCompare(a.name)));
      case "priceUp":
        return setCards([...cards].sort((a, b) => a.price - b.price));
      case "priceDown":
        return setCards([...cards].sort((a, b) => b.price - a.price));
      case "yearUp":
        return setCards([...cards].sort((a, b) => a.year - b.year));
      case "yearDown":
        return setCards([...cards].sort((a, b) => b.year - a.year));
      default:
        return sort;
    }
  };

  return (
    <div className="App wrapper">
      <div>
        <SortSelect
          value={selectedSort}
          onChange={sortCards}
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
      </div>
      <CardList cards={cards}></CardList>
    </div>
  );
}

export default App;
