import React, { useEffect, useState } from "react";
export default function CurrencyConverter() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [amount, setAmount] = useState(100);
  const [output, setOutput] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(
    function () {
      const controller = new AbortController();
      async function convert() {
        setLoading(true);
        if (from === to) {
          setOutput(amount);
          setLoading(false);
          return;
        }
        if (!amount) {
          setOutput(0);
          setLoading(false);
          return;
        }
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`,
          { signal: controller.signal }
        );
        const data = await res.json();
        setOutput(data.rates[to]);
        setLoading(false);
      }
      convert();
      return () => {
        controller.abort();
      };
    },
    [amount, from, to]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        disabled={loading}
      />
      <select
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        disabled={loading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={to}
        onChange={(e) => setTo(e.target.value)}
        disabled={loading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{output}</p>
    </div>
  );
}
