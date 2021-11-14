import {
  Add_todo,
  Load_todo_Success,
  Load_todo_Failed,
  Delete_todo,
  Put_todo,
} from "./action";

const initialState = {
  todoList: [],
};

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case Add_todo:
      return { todoList: state.todoList.concat([action.payload]) };
    case Delete_todo:
      return {
        todoList: state.todoList.filter(
          (item) => item.id !== action.payload
        ),
      };
    case Put_todo:
      return {
        todoList: state.todoList.map((item) =>
          item.id === action.payload.index
            ? {id:item.id,content:action.payload.content}
            : {id:item.id,content:item.content}
        ),
      };
    case Load_todo_Success:
      return { todoList: action.payload };
    case Load_todo_Failed:
      return state;
    default:
      return state;
  }
}
