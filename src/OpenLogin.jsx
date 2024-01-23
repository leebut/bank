function openLogin({ dispatch }) {
  return (
    <section className="flex justify-center">
      <button
        className="my-4 border-2 border-black p-3 text-3xl bg-green-300"
        onClick={() => dispatch({ type: "openAccount" })}
      >
        Openaccount
      </button>
    </section>
  );
}

export default openLogin;
