import styled from "styled-components";
import { useState } from "react";

const Billing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 80px;
`;

const Tipping = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 80px;
`;

function App() {
  const [total, setTotal] = useState(80);
  const [rating, setRating] = useState(null)
  return (
    <div className="container">
      <h1>Welcome</h1>
      <Billing>
        <p>How much was the bill?</p>
        <input value={total} type="number" />
      </Billing>
      <Tipping>
        <p>How did you like the service?</p>
        <select>
          <option value="low">Dissatisfied (0%)</option>
          <option value="medium">Medium (5%)</option>
          <option value="well">Well (10%)</option>
        </select>
      </Tipping>
      <Tipping>
        <p>How did your friend like the service?</p>
        <select>
           <option value="low">Dissatisfied (0%)</option>
          <option value="medium">Medium (5%)</option>
          <option value="well">Well (10%)</option>
        </select>
      </Tipping>
      <p>Total: ${total} </p>
    </div>
  );
}

export default App;
