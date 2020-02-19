import Form from "./Form";
import List from "./List";

const ShoppList = () => {
  const total = 0;

  return (
    <div>
      <h2>Shop List</h2>
      <Form />
      <hr />
      <List />
      <List />
      <List />
      <hr />
      <h3>Total : {total}</h3>
    </div>
  );
};

export default ShoppList;
