import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import App from './App'
import { RouterProvider } from 'react-router-dom'
import route from './routes/Routess'
import AuthContextApi from './context/AuthContextApi'
import FetchUserContext from './context/FetchUserContext'

ReactDOM.createRoot(document.getElementById("root")).render(
<>
<AuthContextApi>
    <FetchUserContext><RouterProvider router={route}/></FetchUserContext>

</AuthContextApi>

</>)