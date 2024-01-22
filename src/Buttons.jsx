import { useRef } from "react";

function Buttons({
  deposit,
  dispatch,
  withdrawal,
  loan,
  loanAmount,
  accountBalance,
}) {
  const repayLoanInput = useRef(null);
  return (
    <div className="flex flex-col">
      <div className="flex">
        {!deposit ? (
          <button
            className="my-4 border-2 border-black p-3 text-3xl bg-green-300"
            onClick={() => dispatch({ type: "makeDeposit" })}
          >
            Deposit funds
          </button>
        ) : (
          <label htmlFor="makeDeposit" className="text-3xl">
            Deposit amount:{" "}
          </label>
        )}
        {deposit === true && (
          <input
            type="number"
            name="makeDeposit"
            placeholder="Deposit amount"
            className="border-2 border-sky-600 text-3xl p-2 w-48 outline-none ml-2 rounded-lg"
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
            className="my-4 border-2 border-black p-3 text-3xl bg-sky-400"
            onClick={() => dispatch({ type: "makeWithdrawal" })}
          >
            Withdraw funds
          </button>
        ) : (
          <label className="text-3xl" htmlFor="make-withdrawal">
            Withdrawal amount:{" "}
          </label>
        )}
        {withdrawal === true && (
          <input
            type="number"
            name="make-withdrawal"
            placeholder="Amount"
            className="border-2 border-sky-600 text-3xl p-2 my-2 w-48 outline-none ml-2 rounded-lg"
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
            className="my-4 border-2 border-black p-3 text-3xl bg-yellow-500"
            onClick={() => dispatch({ type: "loanOut" })}
          >
            Take out a loan
          </button>
        ) : (
          <label htmlFor="take-out-loan" className="text-3xl items-center">
            Loan amount:{" "}
          </label>
        )}
        {loan === true && (
          <input
            type="number"
            name="take-out-loan"
            placeholder="Loan amount"
            disabled={loanAmount > 0 ? true : false}
            // defaultValue={loanAmount > 0 ? loanAmount : ""}
            defaultValue={loanAmount && loanAmount}
            className={
              loanAmount > 0
                ? "bg-slate-400 border-2 text-3xl p-2 my-2 mr-2 w-48 outline-none ml-2 rounded-lg border-red-500 cursor-not-allowed"
                : "border-2 border-sky-600 text-3xl p-2 my-2 w-48 outline-none ml-2 rounded-lg"
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
          <div className="flex items-center">
            <label className="text-3xl" htmlFor="repay-loan">
              Repay loan:{" "}
            </label>
            <input
              ref={repayLoanInput}
              type="number"
              name="repay-loan"
              placeholder="Amount"
              className={
                "border-2 border-sky-600 text-3xl p-2 my-2 w-48 outline-none ml-2 rounded-lg"
              }
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  const inputValue = e.target.value;
                  dispatch({ type: "repayLoan", payload: inputValue });
                  repayLoanInput.current.focus();
                  repayLoanInput.current.select();
                }
              }}
            />
          </div>
        )}
      </div>
      <button
        className="my-4 border-2 border-black p-3 text-3xl w-max bg-red-300"
        disabled={accountBalance < 0}
        onClick={() => dispatch({ type: "closeAccount" })}
      >
        Close Account
      </button>
    </div>
  );
}

export default Buttons;
