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
  loanAmount: 0,
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
      if (state.loanAmount - action.payload < 0) return state;
      if (state.loanAmount - action.payload !== 0) {
        return {
          ...state,
          loanAmount: state.loanAmount - action.payload,
          accountBalance: state.accountBalance - action.payload,
        };
      } else
        return {
          ...state,
          loan: false,
          loanAmount: 0,
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
    case "closeAccount":
      return { ...initAccount };
    default: {
      throw Error("You cannot do that" + action.type);
    }
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
            {username && (
              <Buttons
                accountBalance={accountBalance}
                deposit={deposit}
                dispatch={dispatch}
                withdrawal={withdrawal}
                loan={loan}
                loanAmount={loanAmount}
              />
            )}
          </>
        )}
      </>
    </Main>
  );
}

export default App;
