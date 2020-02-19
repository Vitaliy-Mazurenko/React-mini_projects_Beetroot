import { Delete, ListItem, Input } from "../styles/app";

const List = () => {
  return (
    <ListItem>
      <Input type="checkbox" onChange={(f) => f} checked={false} />
      Banana - $ 20
      <Delete onClick={(f) => f} />
    </ListItem>
  );
};

export default List;
