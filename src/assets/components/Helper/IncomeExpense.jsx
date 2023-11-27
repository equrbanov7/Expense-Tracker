// eslint-disable-next-line react/prop-types
const IncomeExpense = ({text, number}) => {
  return (
    <div className="incomeXp">
      <p>{text}</p>
      <span>{number}</span>
    </div>
  );
};

export default IncomeExpense;
