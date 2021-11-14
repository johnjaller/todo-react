import SignupComponent from "../components/signupComponent";
import LoginComponent from "../components/loginComponent";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import "../App.css";
export default function signupPage(props) {
  return (
<div className='signupContainer'>

       
          <SignupComponent />
    <Link to='/'>Got an account?</Link>

</div>
    
  );
}
