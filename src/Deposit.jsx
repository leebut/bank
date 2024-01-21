function Deposit({ dispatch, deposit }) {
  return (
    <>
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
            }
          }}
        />
      )}
    </>
  );
}

export default Deposit;
