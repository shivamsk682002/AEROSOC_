import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider ,createBrowserRouter} from 'react-router-dom'
import Body from './components/Body.jsx'
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import Events from './components/Events.jsx'
import Team from './components/Team.jsx'
import Workshops from './components/Workshops.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element :<App/>,
    children: [
      {
        path: "",
        element:<Body/>
      },{
        path: "gallery",
        element:<Gallery/>
      },{
        path: "about",
        element:<About/>
      },{
        path: "events",
        element:<Events/>
      },{
        path: "team",
        element:<Team/>
      },{
        path: "workshops",
        element:<Workshops/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
