function openLogin({ dispatch }) {
  return (
    <div>
      <button
        className="my-4 border-2 border-black p-3 text-3xl bg-green-300"
        onClick={() => dispatch({ type: "openAccount" })}
      >
        Openaccount
      </button>
    </div>
  );
}

export default openLogin;
