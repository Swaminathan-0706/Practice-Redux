const redux=require('redux');
const createStore=redux.createStore

//Actions

const Buy_cake='BUY_CAKE'

function buycake()
{
    return {
        type:Buy_cake,
        info: 'FirstRedux_Action'
    }
}

//Reducers
//(previousState,action)=>newwState

const initialState={
    numOfCakes:10
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case Buy_cake:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}

//
const store=createStore(reducer)

console.log(store.getState());
const unsubscribe=store.subscribe(()=>console.log('Updated State',store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
unsubscribe()