import LoginComponent from "../components/loginComponent"
import { Link } from "react-router-dom"

export default function loginPage (props) {
    return(<>
    <LoginComponent/>
    <Link to='/signup'>Have no account?</Link>
    </>   )
  }