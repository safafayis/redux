import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import Todo from './Components/Todo'

function App() {
  return (
    <Provider store = {store}>
      <Todo />
    </Provider>
  )
}

export default App