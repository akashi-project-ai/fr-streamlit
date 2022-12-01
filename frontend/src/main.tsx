import React from 'react'
import ReactDOM from 'react-dom/client'
import MyComponent from './MyComponent'
import 'bulma/css/bulma.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>
)
