const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'INCRESE_COUNTER': 
            return {
                ...state,
                counter: state.counter + 1    
            }
        
        case 'DECRESE_COUNTER': 
            return {
                ...state,
                counter: state.counter - 1    
            }

        default:
            return state;
    }
}
 
const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({type: 'INCRESE_COUNTER', payload: null});
store.dispatch({type: 'INCRESE_COUNTER', payload: null});
store.dispatch({type: 'DECRESE_COUNTER', payload: null});
store.dispatch({type: 'DECRESE_COUNTER', payload: null});
store.dispatch({type: 'DECRESE_COUNTER', payload: null});
