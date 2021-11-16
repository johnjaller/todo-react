import TodoComponent from "../components/todoComponent";
import { Logout } from "../Redux/auth/action";
import { useDispatch } from "react-redux";
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button,Navbar,NavbarBrand,NavbarText } from "reactstrap";

export default function TodoPage(props) {
  const dispatch = useDispatch();
  const logoutBtn = () => {
    dispatch(Logout());
  };
  return (
    <div >
      <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      MY todo
    </NavbarBrand>
    
      <NavbarText>
      <Button onClick={logoutBtn}>Log out</Button>
      </NavbarText>
  </Navbar>
      <nav>

      </nav>

      <TodoComponent />
    </div>
  );
}
