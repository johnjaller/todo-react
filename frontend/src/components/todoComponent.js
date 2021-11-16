import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AddTodo,
  DeleteTodo,
  PutTodo,
  loadTodo,searchTodo
} from "../Redux/todoList/action";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button,Row,Col,Container } from "reactstrap";
import '../App.css'

export default function TodoComponent(props) {
  const[query,setQuery]=useState('')
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(false);
  const todoStore = useSelector((state) => state.todoStore);
  let todoList = todoStore.todoList;
  console.log(todoStore);
  console.log(AddTodo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodo());
  },[]);
  const SearchTodo=(event)=>{
    setQuery(event.target.value)
    console.log(event.target.value)
     dispatch(searchTodo(event.target.value))
    }
  const newToDo = () => {
    if (todo !== "") {
      dispatch(AddTodo(todo));
      setTodo("");
    }
  };
  const removeTodo = (index) => {
    console.log(index);
    dispatch(DeleteTodo(index));
  };

  const modifyTodo = (event, index) => {
    console.log(event.target.value);
    if (event.target.value !== "") {
      dispatch(PutTodo(index, event.target.value));
    }
  };

  return (
    <Container className='todo' >
      <Row>
        <Col>
        <label htmlFor="search">Search:</label>
        <input type="text" name='search' value={query} onChange={(event)=>SearchTodo(event)} placeholder='click here to search'/>
        
      <input
        type="text"
        placeholder=" new Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button type="submit" onClick={newToDo}>
        Add
      </Button>
        </Col>
        <Col>
      {todoList && todoList.length > 0 ? (
        <ul>
          {todoList.map((item) => (
            <li key={item.id}>
              <input
                type="text"
                value={item.content}
                onChange={(event) => modifyTodo(event, item.id)}
              />
              <Button onClick={() => removeTodo(item.id)}>remove</Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no new Todo yet</p>
      )}
      </Col>
      </Row>
    </Container>
  );
}
