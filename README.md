# react-native-api-redux

# react-native-redux-example

Redux Integration Example 

-> Redux is a state container for javascript apps
-> Manage application state through single object called Store.

Redux architecture is based on the following actions.

-> Actions - Store the source of information and type of field
           - Metion what kind of action to perform
           
-> Reducers - Pure functions
            - Actions tells what to do and Reducers tell how to do
            - Get the current state and return the new state.
           
-> Store - Object which holds the state of the application


Steps to create with new project : 

1.Create a fresh project with the following command
a)npx react-native init ReduxSample

2.Install necessary dependencies
a)npm install redux
b)npm install react-redux
c)npm install redux-thunk

3.Create redux folder inside src and create 3 files
a)actions.js
b)reducers.js
c)store.js 

4. useSelector, useDispatch hooks from react-redux to set and get the data
