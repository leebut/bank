import { useReducer } from "react";

import "./App.css";
import Test from "./Test";
import Main from "./Main";
import OpenLogin from "./OpenLogin";

const randAccountNum = crypto.randomUUID();

const initAccount = {
  status: "inactive",
  accountNumber: randAccountNum,
  accountBalance: 125654,
  loan: false,
};

function accountReducer(state, action) {
  switch (action.type) {
    case "savage":
      return {
        ...state,
        status: "active",
        accountNumber: state.accountNumber,
        accountBalance: 0,
      };
    case "openAccount":
      return { ...state, status: "active", accountNumber: randAccountNum };
  }
}

function App() {
  const [{ status, accountNumber, accountBalance }, dispatch] = useReducer(
    accountReducer,
    initAccount
  );

  return (
    <Main>
      <>
        {status === "inactive" && <OpenLogin dispatch={dispatch} />}
        {status === "active" && (
          <Test
            status={status}
            accountNumber={accountNumber}
            accountBalance={accountBalance}
          />
        )}
      </>
    </Main>
  );
}

export default App;
