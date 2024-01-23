function LandingScreen({ dispatch, accountNumber, accountBalance, username }) {
  const styles = "text-2xl";
  return (
    <div>
      {!username && (
        <input
          type="text"
          name="username"
          className="text-3xl p-2 mt-4 border-2 border-sky-800 rounded-lg outline-none"
          placeholder="username"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              const inputValue = e.target.value;
              dispatch({ type: "addUser", payload: inputValue });
            }
          }}
        />
      )}
      {username && (
        <>
          <p className={styles}>Hello {username}</p>
          <p className="text-2xl border-t-2 border-b-2 mt-4 w-max">
            <strong>Account Number:</strong> {accountNumber}
          </p>
          <p
            className={
              accountBalance > 0
                ? "text-2xl font-bold border-t-2 border-b-2 mt-4 w-max"
                : "text-2xl text-red-800 bg-red-300 p-2 font-bold border-t-2 border-b-2 mt-4 w-max"
            }
          >
            Balance: {accountBalance}
          </p>
        </>
      )}
    </div>
  );
}

export default LandingScreen;
