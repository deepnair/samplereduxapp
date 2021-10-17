# Redux sample app

This was made baed on a tutorial by Laith Harb at [React Redux (with hooks) Crash course](https://www.youtube.com/watch?v=9jULHSe41ls)

### Approach
---
1. First create a simple react app called 'reduxsampleapp' with 
    ```
    npx create-react-app reduxsampleapp
    ```
1. Then create a folder called 'state' in the src folder of the app
1. In the state folder create a folder called reducers. Here's where the reducers will stay. The reducers determine how the state will be changed.
    * Write the accountReducer function in a file called accountReducer.js, export it . 
    * Then in an index.js file in the reducers folder. Use {combineReducers} from redux to then export the combinedReducers.
1. Create a store.js file in the state folder. Use {createStore} form redux to create a const store that takes in the reducers, {} (an empty object), install thunk
    ```
    npm i react-thunk
    ```
    * Import thunk from react-thunk and use it along with the imported {applyMiddleWare} from redux as the final parameter in createStore.
    *Export const store as well.
1. Create a folder in state called action-creators. Create an index.js in it. Create the action-creator functions in it with dispatch and export them.
1. In the state folder create an index.js and write the following
    ```
    export * as actionCreators from './action-creators/index'
    ```
1. Now in the index.js in src, import {Provider} from 'react-redux', import store from ./store.js. Wrap the App component with the Provider component and set the source property in it to {source}.
1. Now in the App.js import {useSelector, useDispatch} from react-redux. Import {bindActionCreators} from redux. Import actionCreators from ./action-creators/index.
1. Set const account equal to useSelector and set state to the 'account' key of state (since that is the state we want).
1. Set const dispath equal to useDispatch().
1. Finally destructure the actionCreators and set it equal to bindActionCreators(actionCreators, dispatch).
1. Now use const account for the state and the destructured actionCreators to modify the state.



