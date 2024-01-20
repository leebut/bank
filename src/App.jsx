import { useReducer } from "react";

import "./App.css";
import Test from "./Test";
import Main from "./MainSection";
import OpenLogin from "./OpenLogin";
import Loan from "./Loan";

const randAccountNum = crypto.randomUUID();

const initAccount = {
  status: "inactive",
  accountNumber: randAccountNum,
  accountBalance: 6500,
  loan: false,
  loanAmount: null,
};

function accountReducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        status: "active",
        accountNumber: randAccountNum,
        accountBalance: state.accountBalance,
      };
    case "loanOut":
      return {
        ...state,
        loan: true,
      };
    case "amountLoaned":
      return {
        ...state,
        loanAmount: Number(action.payload),
        accountBalance: Number(state.accountBalance) - action.payload,
      };
  }
}

function App() {
  const [
    { status, accountNumber, accountBalance, loan, loanAmount },
    dispatch,
  ] = useReducer(accountReducer, initAccount);

  return (
    <Main>
      <>
        {status === "inactive" && <OpenLogin dispatch={dispatch} />}
        {status === "active" && (
          <>
            <Test
              status={status}
              accountNumber={accountNumber}
              accountBalance={accountBalance}
            />
            <Loan loan={loan} dispatch={dispatch} loanAmount={loanAmount} />
          </>
        )}
      </>
    </Main>
  );
}

export default App;
