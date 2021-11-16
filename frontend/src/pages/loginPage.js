import LoginComponent from "../components/loginComponent"
import { Link } from "react-router-dom"
import '../App.css'


export default function loginPage (props) {
    return(<div className='signupContainer'>
      <h3>MY todo</h3>
    <LoginComponent/>
    <Link to='/signup'>Have no account?</Link>
    </div>   )
  }