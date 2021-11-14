import { Post_login_Success,Post_login_Failed,Post_logout } from "./action"
const initialState={
  
    isLoggedIn:false|| localStorage.getItem("token") != null
}

export function authReducer(state=initialState,action){
switch (action.type){
    case Post_login_Success:
        return Object.assign({},state,{isLoggedIn:true})
        
    case Post_login_Failed:
        return Object.assign({},state)
    case Post_logout:
        return Object.assign({},state,{isLoggedIn:false})

    default:return state
}
}