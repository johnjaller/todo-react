import SignupComponent from "../components/signupComponent";
import LoginComponent from "../components/loginComponent";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "reactstrap";
import "../App.css";
export default function signupPage(props) {
  return (
<div className=' signupContainer'> 
<h3>MY Todo</h3>
          <SignupComponent />

</div>
    
  );
}
