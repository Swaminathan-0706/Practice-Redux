const redux=require('redux');
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware
const thunkMiddleWare=require('redux-thunk').default
const axios=require('axios')

//Initial State
const initialState={
    loading:false,
    users:[],
    error:''
}

//Action creators

const Fetch_Users_Request='FETCH_USERS_REQUEST'
const Fetch_Users_Success='FETCH_USERS_SUCCESS'
const Fetch_Users_Failure='FETCH_USERS_FAILURE'

const fetchUsersRequest=()=>{
    return{
        type:Fetch_Users_Request
    }
}
const fetchUsersSuccess=(users)=>{
    return{
        type:Fetch_Users_Success, 
        payload:users
    }
}
const fetchUsersFailure=(error)=>{
    return{
        type:Fetch_Users_Failure,
        payload:error
    }
}
//reducer

const reducer=(state=initialState,action)=>{
    switch(action.type){
       case FETCH_USERS_REQUEST:
           return{
               ...state,
               loading:true
           } 
           case FETCH_USERS_SUCCESS:
           return{
               ...state,
               loading:false,
               users:action.payload,
               error:''
           } 
           case FETCH_USERS_FAILURE:
           return{
               ...state,
               loading:false,
               users=[],
               error:action.payload
           } 
    }

}
const fetchUsers=()=>{
    
}
const store=createStore(reducer,applyMiddleware(thunkMiddleWare));