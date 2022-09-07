import React from "react";
import './SearchAndSort.module.css'
import SearchField from "../UI/input/SearchField";
import SortSelect from "../UI/select/SortSelect";

const SearchAndSort = ({sortValue, setSearchAndSortValue}) => {
  return (
    <div className="instrument">
      <SortSelect
        value={sortValue.sortMethod}
        onChange={selectedsort => setSearchAndSortValue({...sortValue, sortMethod: selectedsort})}
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
        value={sortValue.searchLine}
        onChange={(e) => setSearchAndSortValue({...sortValue, searchLine: e.target.value})}
        placeholder="Поиск..."
      />
    </div>
  );
};

export default SearchAndSort;
