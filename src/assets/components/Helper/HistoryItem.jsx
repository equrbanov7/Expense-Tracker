// eslint-disable-next-line react/prop-types
const HistoryItem = ({title,amount, setBalanceRender} ) => {
  function deleteFunction(e){
   
    e.target.parentElement.remove()

    let first=e.target.previousElementSibling.innerHTML;
    let second=e.target.closest('.historyItem').querySelector('h5').innerHTML;
    let data= {nameShow:second , amountShow:first}
    setBalanceRender(data)
  }

    const className = amount > 0 ? "positiveAmount" : "negativeAmount";
  return (
    <div className={`historyItem ${className}`}>
      <h5>{title}</h5>
      <p className="amountShow">{amount}</p>
      <span onClick={deleteFunction}>X</span>
    </div>
  );
};

export default HistoryItem;
