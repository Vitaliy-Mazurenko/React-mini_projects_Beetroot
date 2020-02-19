import { generate as id } from "shortid";

const data = [
  { id: id(), title: "orange", price: 10 },
  { id: id(), title: "banana", price: 20 },
  { id: id(), title: "peach", price: 30 },
];

export { data };
