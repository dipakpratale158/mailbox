import { createSlice } from "@reduxjs/toolkit";
const idToken = localStorage.getItem('idToken') ? localStorage.getItem('idToken') :null ;
const userIsLogin = !!idToken
const userID = localStorage.getItem('userID') ? localStorage.getItem('userID') : null ;
const email = localStorage.getItem('email') ? localStorage.getItem('email') : null ;

const init={userAuth :
    {
        idToken: idToken ,
     isLogin:userIsLogin ,
      userID:userID , 
      email:email
    }
}

const authSlice = createSlice({
    name:'auth',
    initialState:init,
    reducers:{
        setAuthantication :(state , action)=>{
           state.userAuth = action.payload ; 
        }
    }
})

const authReducer = authSlice.reducer ;
export const {setAuthantication} = authSlice.actions;
export default authReducer;