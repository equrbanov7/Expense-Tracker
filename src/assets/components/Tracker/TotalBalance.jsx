// eslint-disable-next-line react/prop-types
const TotalBalance = ({balance}) => {


  return (
    <div className="headExpense">
      <div className="finalAnswer">
        <p>your balance</p>
        <span>{`$ ${balance}`} </span>
      </div>
    </div>
  );
};

export default TotalBalance;
