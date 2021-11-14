import axios from "axios"
import { useHistory } from "react-router"
export const Post_login_Success='Post_login_Success'
export const Post_login_Failed='Post_login_Failed'
export const Post_logout='Post_logout'

export const PostLogin=(user,pwd)=>async(dispatch)=>{
    try {
        console.log(user)
        console.log(pwd)
        let response=await axios.post(`${process.env.REACT_APP_API_SERVER}/api/login`,{
            email:user,password:pwd}
        )
        let {data}=response
        if (data == null) {
            dispatch({
              type: Post_login_Failed,
              message: "Unknown Error",
            });
          } else if (!data.token) {
            dispatch({
              type: Post_login_Failed,
              message: data.message || "No Token!",
            });
          } else {
            localStorage.setItem("token", data.token);
            dispatch({ type: Post_login_Success });
          }
        
    } catch (error) {
        
    }
}

export const PostSignup=(user,email,pwd)=>async(dispatch)=>{
    try {
        console.log(user)
        console.log(pwd)
        let response=await axios.post(`${process.env.REACT_APP_API_SERVER}/api/signup`,{
            username:user,email:email,password:pwd}
        )
        let {data}=response
        if (data == null) {
          alert('signup failed')
          } else {
          alert('Signup sucess')
          }
        
    } catch (error) {
        
    }
}

export const Logout=()=>{

    return(dispatch)=>{

    localStorage.removeItem('token')
    dispatch({
        type:Post_logout
    })
}
}
// }