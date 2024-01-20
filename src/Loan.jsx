function Loan({ dispatch, loan, loanAmount }) {
  return (
    <>
      <button onClick={() => dispatch({ type: "loanOut" })}>
        Take out a loan
      </button>
      {loan === true && (
        <input
          type="text"
          name="takeOutLoan"
          disabled={loanAmount > 0 ? true : false}
          className={
            loanAmount > 0
              ? "bg-slate-400 border outline-none"
              : "border outline-none"
          }
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              const inputValue = e.target.value;
              dispatch({ type: "amountLoaned", payload: inputValue });
            }
          }}
        />
      )}
    </>
  );
}

export default Loan;
