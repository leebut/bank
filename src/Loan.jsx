function Loan({ dispatch, loan, loanAmount }) {
  return (
    <>
      {!loan ? (
        <button
          className="bg-yellow-500 text-3xl"
          onClick={() => dispatch({ type: "loanOut" })}
        >
          Take out a loan
        </button>
      ) : (
        <p>Loan amount: </p>
      )}
      {loan === true && (
        <input
          type="text"
          name="takeOutLoan"
          placeholder="Loan amount"
          disabled={loanAmount > 0 ? true : false}
          className={
            loanAmount > 0
              ? "bg-slate-400 border border-red-500 outline-none"
              : "border border-blue-500 outline-none"
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
