// import styled from "styled-components";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(null);
  const [rating1, setRating1] = useState(0);
  const tip = (bill / 100) * rating1
  const total = bill + tip;
  return (
    <div>
      <Billing bill={bill} onSetBill={setBill} />
      <Tipping rating={rating1} onSetRating={setRating1}>
        How did you like the service?
      </Tipping>
      <Total bill={bill} total={total} percentage={rating1} />
      <Resetting />
    </div>
  );
}

export default App;

function Billing({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        value={bill}
        type="number"
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tipping({ rating, onSetRating, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={rating}
        onChange={(e) => onSetRating(Number(e.target.value))}
      >
        <option value="0">Bad 0%</option>
        <option value="5">Okay 5%</option>
        <option value="10">Good 10%</option>
        <option value="15">Perfect 15%</option>
      </select>
    </div>
  );
}

function Total({ total, bill, percentage }) {
  return (
    <div>
      <h3>
        Total: {total} ( ${bill} + {percentage} % )
      </h3>
    </div>
  );
}

function Resetting() {}
