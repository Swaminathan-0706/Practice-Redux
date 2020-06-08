const redux=require('redux');
const createStore=redux.createStore
const combineReducers=redux.combineReducers

//Actions

const Buy_cake='BUY_CAKE'
const Buy_Ice='BUY_ICE'


function buycake()
{
    return {
        type:Buy_cake,
        info: 'FirstRedux_Action'
    }
}
function buyIce(){
    return{
        type:Buy_Ice,
        info:'SecondRedux_Action'
    }
}

//Reducers
//(previousState,action)=>newwState

// const initialState={
//     numOfCakes:10,
//     numofIceCreams:20
// }
const initialcakeState={
    numOfCakes:10
}
const initiaIceCream={
    numofIceCreams:20
}
// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case Buy_cake:return{
//             ...state,
//             numOfCakes:state.numOfCakes-1
//         }
//         default:return state
//     }
//     switch(action.type){
//         case Buy_Ice:return{
//             ...state,
//             numofIceCreams:state.numofIceCreams-1
//         }
//         default:return state
//     }
// }
const cakereducer=(state=initialcakeState,action)=>{
    switch(action.type){
        case Buy_cake:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }
}
const iceCreamReducer=(state=initiaIceCream,action)=>{
    switch(action.type){
        case Buy_Ice:return{
            ...state,
            numofIceCreams:state.numofIceCreams-1
        }
        default:return state
    }
}
//Combine reducers
const rootReducer=combineReducers({
    cake:cakereducer,
    ice:iceCreamReducer
})
//
const store=createStore(rootReducer)

console.log(store.getState());
const unsubscribe=store.subscribe(()=>console.log('Updated State',store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyIce())
store.dispatch(buyIce())

unsubscribe()