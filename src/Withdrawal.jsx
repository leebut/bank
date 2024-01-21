function Withdrawal({ dispatch, withdrawal }) {
  return (
    <>
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
          type="text"
          name="make-withdrawal"
          placeholder="Withdrawal amount"
          className="border border-sky-600"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              const inputValue = e.target.value;
              dispatch({ type: "withdrawNow", payload: inputValue });
            }
          }}
        />
      )}
    </>
  );
}

export default Withdrawal;
