import { useSelector } from 'react-redux';
import Button from './Button';
export default function UserInfo() {
  let data = useSelector((state) => state.user);
  return (
    <div>
      <h1>Hello Mr.{data.username}</h1>
      <h3>Balance:{data.balance}</h3>
      <Button />
    </div>
  );
}
