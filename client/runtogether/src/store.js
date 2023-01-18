const redux = require('redux')
const reduxLogger = require('redux-logger')
// console.log(redux)
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger;

// action 
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER'

const addSubscriber = () => {
    return {
        type: 'ADD_SUBSCRIBER'
    }
}

// reducer
const initialState = {
    subscribers: 300
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_SUBSCRIBER:
            return {
                ...state,
                subscribers: state.subscribers + 1
            }
        default:
            return state;
    }
}


// store
const store = createStore(reducer);
console.log(store.getState())

// subscribe
store.subscribe(() => {
    console.log('SUBSCRIBE ---> ', store.getState())
})


// dispatch
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
