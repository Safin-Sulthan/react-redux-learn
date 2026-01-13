import UserInfo from './Components/UserInfo';
import { useSelector } from 'react-redux';
export default function App() {
  let data = useSelector((state) => state.user);
  return (
    <div>
      <h2>WELCOME MR {data.username} </h2>
      <UserInfo />
    </div>
  );
}
