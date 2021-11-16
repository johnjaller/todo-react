import { useState } from "react";
import { useDispatch } from "react-redux";
import { PostSignup } from "../Redux/auth/action";
import { Link } from "react-router-dom";
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button } from "reactstrap";

export default function SignupComponent(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "password") {
      setPasword(event.target.value);
    } else if (event.target.name === "username") {
      setUsername(event.target.value);
    }
  };
  const formSubmission = (event) => {
    console.log('test')
    event.preventDefault()
    dispatch(PostSignup(username,email,password))
    setEmail('')
    setUsername('')
    setPasword('')
  };
  return (
    <div >
      <h3>Sign Up</h3>
      <label htmlFor="username">Username:</label>
      <form onSubmit={formSubmission}>
        <input
          type="text"
          name="username"
          placeholder="John Doe"
          value={username}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Your new password"
          value={password}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <Button color='primary' type="submit">Sign up</Button>
      </form>
    <Link to='/'>Got an account?</Link>

    </div>
  );
}
