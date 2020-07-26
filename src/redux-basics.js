const redux = require('redux')
const createStore = redux.createStore

const initialState = {
    counter:0
}
//Reducer
const rootReducer = (state = initialState, action) => {
 if (action.type === 'INC COUNTER'){
     return {
         ...state,
         counter:state.counter + 1 
     }
 }
 if (action.type === 'INC COUNTER'){
    return {
        ...state,
        counter:state.counter + action.value
    }
}
}

//store
const store = createStore(rootReducer)
console.log(store.getState())

//Dispatching action
store.dispatch({type: 'INC COUNTER'});
store.dispatch({type: 'ADD COUNTER', value: 10})

