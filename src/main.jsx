import { createRoot } from 'react-dom/client'
import './index.css'
// import Contact from './Contact.jsx'
// import Counter from './useReducer/Counter.jsx'

// import App from './Redux/App.jsx'
// import Todo from './useReducer/Todo.jsx'

// REDUX TOOL KIT IMPORTS
// import {Provider} from 'react-redux'
// import App from './Redux/App.jsx'
// import store from './Redux/store.js'

// REDUX TOOL KIT USING COUNTER
// import { Provider } from 'react-redux'
// import Counter from "../src/CounterRedux/Counter.jsx"
// import store from  "../src/CounterRedux/store.js"

//USEMEMO IMPORTS
import MemoCounter from "./useMemo/MemoCounter.jsx"

createRoot(document.getElementById('root')).render(
  // <Counter/>
  // <Todo />

//   <Provider store={store}>
//     <App/>
//   </Provider>

    // <Provider store={store}>
    //   <Counter/>
    // </Provider>
    <MemoCounter/>
)