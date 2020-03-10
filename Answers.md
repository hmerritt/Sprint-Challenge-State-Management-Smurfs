1. What problem does the context API help solve?
    - The context api helps solve the problems with drop-drilling; mainly that managing state across components is very hard to do when using prop-drilling. The context-api abstracts this problem away by enabling us to have access to state across all components.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    1. Actions - An action is used to tell a reducer how to update the state and in what way. You can have many actions which all change the state in different ways.
    2. Reducers - A reducer is a function that takes in the current state of the application and an action which is used to return a new state object. A single reducer can have many actions which manipulate the state in any way you define.
    3. Store - The store is where the final state object that the application is using is kept. State is then pulled from the store into each component that needs it. The store is immutable and can only be updated by the use of a reducer

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    1. Application state is what us kept in the store and holds all the general state for the entire application.
    2. Component state is the state for an individual component; this state is isolated to this component as any state that multiple components need would be kept in the store.
    3.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - `redux-thunk` is a redux middleware which allows us to use and manage asynchronous code in our actions. Our actions can will then execute any acync code, such as a fetch call, and manage each stage from START though SUCCESS and also manage FAILIURE.

5. What is your favourite state management system you've learned and this sprint? Please explain why!
    - I am unsure which to call my favourite as I can see the use for both. I think for now Context-api would be my favourite as I find it easier to use and implement BUT I see the value in redux as it would become easier at scale when working with a mountain of state.
