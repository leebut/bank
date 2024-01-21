function LandingScreen({ dispatch, accountNumber, accountBalance, username }) {
  const styles = "text-2xl";
  return (
    <div>
      <input
        type="text"
        name="username"
        className="border border-sky-800 outline-none"
        placeholder="Username"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            const inputValue = e.target.value;
            dispatch({ type: "addUser", payload: inputValue });
          }
        }}
      />
      <p className={styles}>Hello {username}</p>
      {/* <p className={styles}>{status}</p> */}
      <p className={styles}>Account Number: {accountNumber}</p>
      <p className={styles}>Balance: £{accountBalance}</p>
    </div>
  );
}

export default LandingScreen;
