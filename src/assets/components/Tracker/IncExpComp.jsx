import IncomeExpense from "../Helper/IncomeExpense";
import React from "react";

//let catchAllAmounts=[]
// eslint-disable-next-line react/prop-types
const IncExpComp = ({ activateAmounts, sendAmount, deleteValue}) => {
  const [income, setIncome] = React.useState(0);
  const [expense, setExpense] = React.useState(0);
  const [catchAllAmounts, setCatchAllAmounts] = React.useState([]);

  React.useEffect(() => {
    if (activateAmounts) {
      setCatchAllAmounts((prev) => [...prev, Number(activateAmounts[1])]);
    }
  }, [activateAmounts]);
   console.log("catchAll", catchAllAmounts);

  React.useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;
    catchAllAmounts.forEach((value) => {
      if (value > 0) {
        totalIncome += value ;
      } else {
        totalExpense += value;
      }
      setIncome(totalIncome);
      setExpense(totalExpense);
    
      // console.log("valuee", value);
    });
  },[catchAllAmounts]);


  sendAmount(income,expense)
  // console.log("InExpActivate", activateAmounts, "Catch", catchAllAmounts);
  React.useEffect(()=>{
    setCatchAllAmounts(prev => prev.filter(item => item !== deleteValue));
    if(deleteValue>0){
       setIncome(prev=>prev- deleteValue)
      // console.log("jsad",catchAllAmounts)
     // setCatchAllAmounts((prev) => [...prev, income]);
    }
    else if(deleteValue<0){
      setExpense(prev=>prev- deleteValue)
     // setCatchAllAmounts((prev) => [...prev, expense]);
    }
  
     
    
    
    
    // console.log("inExp", deleteValue)
  },[deleteValue])

  return (
    <div className="incomeExpense">
      <IncomeExpense text={"Income"} number={`$ ${income}`} />
      <div className="line"></div>
      <IncomeExpense text={"expense"} number={`$ ${expense}`} />
    </div>
  );
};

export default IncExpComp;
