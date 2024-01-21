function Buttons({ deposit, dispatch, withdrawal, loan, loanAmount }) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        {!deposit ? (
          <button
            className="bg-green-400 text-3xl"
            onClick={() => dispatch({ type: "makeDeposit" })}
          >
            Deposit funds
          </button>
        ) : (
          <p>Deposit amount: </p>
        )}
        {deposit === true && (
          <input
            type="text"
            name="makeDeposit"
            placeholder="Deposit amount"
            className="border border-sky-600"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                const inputValue = e.target.value;
                dispatch({ type: "depositNow", payload: inputValue });
              } else if (e.key === "Escape") {
                dispatch({ type: "cancelDeposit" });
              }
            }}
          />
        )}
      </div>

      <div className="flex">
        {!withdrawal ? (
          <button
            className="bg-sky-400 text-3xl"
            onClick={() => dispatch({ type: "makeWithdrawal" })}
          >
            Withdraw funds
          </button>
        ) : (
          <p>Withdrawal amount: </p>
        )}
        {withdrawal === true && (
          <input
            type="number"
            name="make-withdrawal"
            placeholder="Withdrawal amount"
            className="border border-sky-600"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                const inputValue = e.target.value;
                dispatch({ type: "withdrawNow", payload: inputValue });
              } else if (e.key === "Escape") {
                dispatch({ type: "cancelWithdrawal" });
              }
            }}
          />
        )}
      </div>

      <div className="flex">
        {!loan || loanAmount === 0 ? (
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
            type="number"
            name="takeOutLoan"
            placeholder="Loan amount"
            disabled={loanAmount > 0 ? true : false}
            value={loanAmount && loanAmount}
            className={
              loanAmount > 0
                ? "bg-slate-400 border border-red-500 outline-none"
                : "border border-blue-500 outline-none"
            }
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                const inputValue = e.target.value;
                dispatch({ type: "amountLoaned", payload: inputValue });
              } else if (e.key === "Escape") {
                dispatch({ type: "cancelLoan" });
              }
            }}
          />
        )}

        {loanAmount > 0 && (
          <input
            type="number"
            name="repay-loan"
            placeholder="Amount to repay"
            className={"border border-blue-500 outline-none"}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                const inputValue = e.target.value;
                dispatch({ type: "repayLoan", payload: inputValue });
              } else if (e.key === "Escape") {
                dispatch({ type: "cancelRepayLoan" });
              }
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Buttons;
