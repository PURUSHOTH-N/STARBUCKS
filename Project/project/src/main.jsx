import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import App from './App'
import { RouterProvider } from 'react-router-dom'
import route from './routes/Routess'
import AuthContextApi from './context/AuthContextApi'

ReactDOM.createRoot(document.getElementById("root")).render(
<>
<AuthContextApi>
<RouterProvider router={route}/>
</AuthContextApi>

</>)