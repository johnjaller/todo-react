import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AddTodo,
  DeleteTodo,
  PutTodo,
  loadTodo,
} from "../Redux/todoList/action";
export default function TodoComponent(props) {
  const[query,setQuery]=useState('')
  const [todo, setTodo] = useState("");
  const [warning, setWarning] = useState(false);
  const todoStore = useSelector((state) => state.todoStore);
  const todoList = todoStore.todoList;
  console.log(todoStore);
  console.log(AddTodo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodo());
  }, []);
  const searchTodo=(e)=>{
      setQuery(e.target.value)
      dispatch(searchTodo(query))
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
    <div>
        <label htmlFor="search">Search:</label>
        <input type="text" name='search' value={query} onChange={(e)=>setQuery(e.target.value)} />
      <input
        type="text"
        placeholder=" new Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" onClick={newToDo}>
        Add
      </button>
      {todoList && todoList.length > 0 ? (
        <ul>
          {todoList.map((item) => (
            <li key={item.id}>
              <input
                type="text"
                value={item.content}
                onChange={(event) => modifyTodo(event, item.id)}
              />
              <button onClick={() => removeTodo(item.id)}>remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no new Todo yet</p>
      )}
    </div>
  );
}
