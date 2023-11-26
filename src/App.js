function App() {
  return (
    <div className="App">
      <h1 className="title">Currency Converter</h1>
      <div className="converter">
        <div className="calculator">
          <input type="text" />
          <select>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>
          <select>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>
        </div>

        <p>OUTPUT</p>
      </div>
    </div>
  );
}

export default App;
