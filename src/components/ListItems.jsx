import Item from "./Item";
import Filter from "./Filter";
import { useState } from "react";

const ListItems = ({ title, items }) => {
  const [filter, setFilter] = useState('')
  
  const updateFilter = (filter) =>  setFilter(filter)
  
  const getBody = () => {
    return items.filter(item => item.value.toLowerCase().includes(filter.trim().toLowerCase()))
    .map(v => <Item item={v}  key={v.id}/>)
  }

  return (
    <section>
      <h3 className="mb-3">Title</h3>
      <Filter filter={filter} updateFilter={updateFilter} />
      <ul className="mb-3 p-0">
        {getBody()}
      </ul>
    </section>
  );
};

export default ListItems;
