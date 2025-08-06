import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Contact from './Contact.jsx'
import Counter from './useReducer/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <Counter/>
)