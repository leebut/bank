function LandingScreen({ status, accountNumber, accountBalance }) {
  const styles = "text-2xl";
  return (
    <div>
      <p className={styles}>noggin</p>

      <p className={styles}>{status}</p>
      <p className={styles}>Account Number: {accountNumber}</p>
      <p className={styles}>Balance: £{accountBalance}</p>
    </div>
  );
}

export default LandingScreen;
