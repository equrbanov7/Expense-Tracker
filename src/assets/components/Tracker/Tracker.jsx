import "../../css/index.css";
import React, { useState } from "react";
import FormAll from "./FormAll";
import HistoryAll from "./HistoryAll";
import IncExpComp from "./IncExpComp";
import TotalBalance from "./TotalBalance";


let arrayCatch=[]

// eslint-disable-next-line react/prop-types
const Tracker = () => {
  
  const[activator,setActivator]=useState(0)

   const[value,setValue]=React.useState();
   const[balance,setBalance]=React.useState(0)
   let catchNew=0;
  
  //  const[balance,setBalance]=React.useState(0)

  function handleValue(newValue){
      catchNew=newValue
    // console.log("Namee  handle",newValue[0])
    // console.log("Amountt  handle",newValue[1])
    console.log(catchNew)
    arrayCatch.push({nameShow:catchNew[0],amountShow:catchNew[1]})
    console.log( "array",arrayCatch)
    setValue(newValue)
  }

  function boardingBalanceToAll(income,expense){
    let total=income+expense;
    setBalance(total)
    // console.log("Board value", income,expense,total)
  }

 
  function deleteRender(delValue){
   setActivator(delValue)
    //const updatedData = arrayCatch.filter(item => !(item.amountShow == delValue.nameShow && item.nameShow == delValue.amountShow));
    // console.log("AppJsx", delValue.nameShow,"All" ,updatedData)

  }
  
   React.useEffect(()=>{
      console.log("Helloo",activator.amountShow )
   },[activator])

  return (
    <section className="expenseTracker">
      
      <h1>Expense Tracker</h1>
      <div className="catchAllInfo">
        <TotalBalance balance={balance} />

        <IncExpComp activateAmounts={value} sendAmount={boardingBalanceToAll} deleteValue={Number(activator.amountShow)} />

        <HistoryAll activateFunction={value} boardDelete={deleteRender} />

        <FormAll makingValues={handleValue} />
      </div>
    </section>
  );
};

export default Tracker;
