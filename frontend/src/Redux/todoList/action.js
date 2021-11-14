import axios from "axios";
export const Load_todo_Success = "Load_todo_Success";
export const Load_todo_Failed = "Load_todo_Failed";
export const Add_todo = "Add_todo";
export const Delete_todo = "Delete_todo";
export const Put_todo = "Put_todo";
export const Search_todo = "Search_todo";

export function AddTodo(content) {
  let userToken = localStorage.getItem("token");
  return (dispatch) => {
    return axios
      .post(
        `${process.env.REACT_APP_API_SERVER}/api/todo`,
        { content: content },
        { headers: { Authorization: `Bearer ${userToken}` } }
      )
      .then((response) => {
        console.log(response);
        let { data } = response;

        console.log(data);
        dispatch(loadTodoSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loadTodoFailed());
      });
  };
}

export function DeleteTodo(index) {
  let userToken = localStorage.getItem("token");
  return (dispatch) => {
    return axios
      .delete(`${process.env.REACT_APP_API_SERVER}/api/todo`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        data: {
          id: index,
        },
      })
      .then((response) => {
        console.log(response);
        let { data } = response;

        console.log(data);
        dispatch(loadTodoSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loadTodoFailed());
      });
  };
}

export function PutTodo(index, content) {
  let userToken = localStorage.getItem("token");
  return (dispatch) => {
    return axios
      .put(
        `${process.env.REACT_APP_API_SERVER}/api/todo`,
        { id: index, content: content },
        { headers: { Authorization: `Bearer ${userToken}` } }
      )
      .then((response) => {
        console.log(response);
        let { data } = response;

        console.log(data);
        dispatch(loadTodoSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loadTodoFailed());
      });
  };
}

export function loadTodoSuccess(content) {
  return {
    type: Load_todo_Success,
    payload: content,
  };
}
export function loadTodoFailed() {
  return {
    type: Load_todo_Failed,
  };
}

export function loadTodo() {
  let userToken = localStorage.getItem("token");
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_SERVER}/api/todo`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        console.log(response);
        let { data } = response;

        console.log(data);
        dispatch(loadTodoSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loadTodoFailed());
      });
  };
}

export function searchTodo(query) {
  return {
    type: Search_todo,
    payload: query,
  };
}
