import { createRoot } from 'react-dom/client'
import './index.css'
// import Contact from './Contact.jsx'
import Counter from './useReducer/Counter.jsx'
// import Todo from './useReducer/Todo.jsx'

// REDUX TOOL KIT IMPORTS
import {Provider} from 'react-redux'
import App from './Redux/App.jsx'
import store from './Redux/store.js'

createRoot(document.getElementById('root')).render(
  // <Counter/>
  // <Todo />

  <Provider store={store}>
    <App/>
  </Provider>
)