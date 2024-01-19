function openLogin({ dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "openAccount" })}>
        Openaccount
      </button>
    </div>
  );
}

export default openLogin;
