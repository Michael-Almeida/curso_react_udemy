import { useState, useEffect, React } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando item do DB...");

    setMyItems(getItems);
  }, [getItems]);
  return (
    <div>
      <h2>List</h2>
      {myItems && myItems.map((item) => <p key={item}>{item}</p>)}
    </div>
  );
};

export default List;
