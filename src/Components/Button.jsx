import { useDispatch } from 'react-redux';
import { addMoney, withDraw } from '../store';
import { useState } from 'react';

export default function Button() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState('');
  function moneyHandling() {
    dispatch(addMoney(Number(amount)));
    setAmount('');
  }

  function moneyDebit() {
    dispatch(withDraw(Number(amount)));
    setAmount('');
  }
  return (
    <div>
      <input
        type="number"
        id="credit"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />

      <button onClick={moneyHandling}>Add Money</button>
      <br />
      <br />
      <button onClick={moneyDebit}>WithDraw Amount</button>
    </div>
  );
}
