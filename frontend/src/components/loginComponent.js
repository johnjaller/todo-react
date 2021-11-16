import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostLogin } from "../Redux/auth/action";
import { useHistory,Link,useRouteMatch } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button } from "reactstrap";

export default function LoginComponent(props) {
  const authStore = useSelector((state) => state.authStore);
  const { isLoggedIn } = authStore;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/todo");
    }
  }, [isLoggedIn, history]);
  const loginSubmit = (event) => {
    event.preventDefault();
    dispatch(PostLogin( username, password ));
    setUsername("");
    setPassword("");
  };
  return (
    <div >
      <h3>Login</h3>
      <form onSubmit={loginSubmit}>
        <label htmlFor="">Username</label>
        <br />
        <input
          type="text"
          placeholder="example@email.com"
          name='email'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button color='primary' type="submit">Login</Button>
      </form>
     
    </div>
  );
}
