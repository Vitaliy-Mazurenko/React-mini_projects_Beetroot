import Item from "./Item";
import Filter from "./Filter";
import PropTypes from 'prop-types';
import { useState} from "react";
import { useFilterItem} from '../context/AppContext'
const ListItems = ({ title }) => {
  const [filter,setFilter]=useState('')
  const updateFilter = (searchTerm) => {
    setFilter(searchTerm);
  };
  const {filterItems}=useFilterItem();

 function listRender(){
     let items=filterItems(title);
      if(filter.length>0) items=items.filter(item=>item.value.toUpperCase().includes(filter.toUpperCase()))
      return(
          <>
              <h3 className="mb-3">{title}</h3>
              <Filter filter={filter} onChange={updateFilter} />
              <ul className="mb-3 p-0">
                  {items.map(item=><Item key={item.id} item={item} />)}
              </ul>
          </>
      )
 }
  return (
    <section>
        {listRender()}
    </section>
  );
};
ListItems.propTypes = {
    title: PropTypes.string.isRequired
}

export default ListItems;
