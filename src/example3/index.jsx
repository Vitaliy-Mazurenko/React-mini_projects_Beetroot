import Form from "./Form";
import List from "./List";

const Cart = () => {
  const total = 0;

  return (
    <div>
      <h2>Card</h2>
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

export default Cart;
