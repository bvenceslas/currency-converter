import { useEffect, useState } from "react";

function App() {
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [amount, setAmount] = useState(0);
  const [value, setValue] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const convertCurrency = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
      );

      const data = await res.json();

      setValue(data.rates[toCur]);
      setIsLoading(false);
    };

    if (fromCur === toCur) return setValue(amount);

    convertCurrency();
  }, [amount, fromCur, toCur]);

  return (
    <div className="App">
      <h1 className="title">Currency Converter</h1>
      <div className="converter">
        <div className="calculator">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            disabled={isLoading}
          />
          <select
            value={fromCur}
            onChange={(e) => setFromCur(e.target.value)}
            disabled={isLoading}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>
          <select
            value={toCur}
            onChange={(e) => setToCur(e.target.value)}
            disabled={isLoading}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>
        </div>

        <p className="result">{`${value} ${toCur}`}</p>
      </div>
    </div>
  );
}

export default App;
