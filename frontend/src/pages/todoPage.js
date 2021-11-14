import TodoComponent from "../components/todoComponent";
import { Logout } from "../Redux/auth/action";
import { useDispatch } from "react-redux";

export default function TodoPage(props) {
  const dispatch = useDispatch();
  const logoutBtn = () => {
    dispatch(Logout());
  };
  return (
    <div>
      <button onClick={logoutBtn}>Log out</button>

      <TodoComponent />
    </div>
  );
}
