import React, { Fragment } from 'react' // Fragment allows us to wrap up multiple things to return from a component
import { render } from 'react-dom'
import { map } from 'ramda' // import your Ramda functions here
// import {find} from 'ramda'
// Here are the todos

const todolist = ['Do something', 'Do something else', 'Hurry up']


// This is a TodoList React component that takes a list of "todo" strings
// wraps them in <li> elements and returns them
// The "todos" array is passed in the props - we're "destructuring" it immediately
// into a variable of the same name
function TodoList ({ todos }) {
  return (
    <ul>
      {map(todo => <li key={todo}>{todo}</li>, todos)}
    </ul>
  )
}




// This is a TodoPanel React component (we just made these up). It takes the
// title and the list of todos as props. Then it returns a <div> with an <h1>
// inside and puts the `title` in that. And it returns a <ul> element and inside
// it the TodoList we created above. It has to pass the `todos` it got in its
// props along to the TodoList in that components props.
// We use Fragment to return two things -- the <h1> and the <TodoList>
// without having to wrap them in a <div> or similar.
function TodoPanel ({ title, todos,users }) {
  return (
    <Fragment>
      <h1>{title}</h1>
      <TodoList todos={todos} />
      
    </Fragment>
  )
}

// This is the main entry point for our React app - the top of the component hierarchy
// So we call it App (but we could call it anything we want)
// It uses the TodoPanel component we created above, and passes it the todolist
// and the title as props. The TodoPanel will pass the todos on down to the TodoList
// component.
function App () {
  return (
    <div>
      <TodoPanel todos={todolist} title='My Todos' />
       
    </div>
  )
}

// This renders the App and injects it into our public/index.html file at the
// <div id="root"></div> element
render(<App />, document.getElementById('root'))
