import React from "react";
import HistoryItem from "../Helper/HistoryItem";
import TitleWithline from "../Helper/titleWithline";

// eslint-disable-next-line react/prop-types
const HistoryAll = ({ activateFunction, boardDelete }) => {
  const [items, setItems] = React.useState([]);


  React.useEffect(() => {
    // console.log("active", activateFunction);
    if (activateFunction) {
   

      // Adding the new item to the list
      setItems((prevItems) => [
        ...prevItems,
        { title: activateFunction[0], amount: activateFunction[1] },
      ]);
    }
  }, [activateFunction]);

  return (
    <div className="history">
      <TitleWithline title={"History"} />
      <div className="historyItems">
        {items.map((item,index) => (
          // eslint-disable-next-line react/jsx-key
          <HistoryItem  key={index} title={item.title} amount={item.amount} setBalanceRender={boardDelete} />
        ))}
      </div>
    </div>
  );
};

export default HistoryAll;
