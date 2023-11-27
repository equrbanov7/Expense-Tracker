import React from "react";
import TitleWithline from "../Helper/titleWithline";

// eslint-disable-next-line react/prop-types
const FormAll = ({ makingValues }) => {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");
 
  function gettingInputValues() {
    // console.log("Name:", name);
    // console.log("Amount:", amount);
    if (name !== "" && amount !== "") {
      // Create a new array
     // arr.push(name,amount)
      const updatedArr=[name,amount];

      // console.log("form", updatedArr);

      //send valuables
      makingValues(updatedArr);

      // Reset input 
      setName("");
      setAmount("");

    }else{
      alert("Please fill in both fields before submitting.");
    }
  }

  return (
    <div className="catchForm">
      <TitleWithline title={"Add new transaction"} />

      <form>
        <label htmlFor="name">Text:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="amount">
          Amount
          <br />
          <p>(negative-expense, positive-income)</p>
        </label>
        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="button" onClick={gettingInputValues}>
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default FormAll;
