import { useReducer } from "react";

import "./App.css";
import Main from "./MainSection";
import OpenLogin from "./OpenLogin";
import Header from "./Header";
import LandingScreen from "./LandingScreen";
import Buttons from "./Buttons";

const randAccountNum = crypto.randomUUID();

const initAccount = {
  status: "inactive",
  username: "",
  accountName: "",
  accountNumber: randAccountNum,
  accountBalance: 0,
  loan: false,
  loanAmount: null,
  deposit: false,
  withdrawal: false,
};

function accountReducer(state, action) {
  switch (action.type) {
    case "addUser":
      return { ...state, username: action.payload };
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
        accountBalance: Number(state.accountBalance) + Number(action.payload),
      };
    case "repayLoan":
      return {
        ...state,
        loanAmount: state.loanAmount - action.payload,
        accountBalance: state.accountBalance - action.payload,
      };
    case "cancelLoan":
      return { ...state, loan: false };

    case "makeDeposit":
      return { ...state, deposit: true };
    case "depositNow":
      return {
        ...state,
        accountBalance: Number(state.accountBalance) + Number(action.payload),
        deposit: false,
      };
    case "cancelDeposit":
      return { ...state, deposit: false };
    case "makeWithdrawal":
      return { ...state, withdrawal: true };
    case "withdrawNow":
      return {
        ...state,
        accountBalance: Number(state.accountBalance) - Number(action.payload),
        withdrawal: false,
      };
    case "cancelWithdrawal":
      return { ...state, withdrawal: false };
  }
}

function App() {
  const [
    {
      status,
      username,
      accountNumber,
      accountBalance,
      loan,
      loanAmount,
      deposit,
      withdrawal,
    },
    dispatch,
  ] = useReducer(accountReducer, initAccount);

  return (
    <Main>
      <>
        <Header />
        {status === "inactive" && <OpenLogin dispatch={dispatch} />}
        {status === "active" && (
          <>
            <LandingScreen
              dispatch={dispatch}
              accountNumber={accountNumber}
              accountBalance={accountBalance}
              username={username}
            />

            <Buttons
              deposit={deposit}
              dispatch={dispatch}
              withdrawal={withdrawal}
              loan={loan}
              loanAmount={loanAmount}
            />
          </>
        )}
      </>
    </Main>
  );
}

export default App;
