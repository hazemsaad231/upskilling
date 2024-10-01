import Home from './components/home'
import About from './components/about'
import Concact from './components/concact'
import Projects from './components/projects'
import Skills from './components/skills'
import Master from './components/layout/layout'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {

const zamlek = createBrowserRouter([
  {

    path: '/',
    element:<Master/>,
    errorElement:<div>this page not found</div>,
    children:[
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'about',element:<About/>},
      {path:'skills',element:<Skills/>},
      {path:'projects',element:<Projects/>},
      {path:'concact', element:<Concact/>},

    ]
  }
])
  
  return (
    <>
<div className='flex'>
<RouterProvider router={zamlek} ></RouterProvider>
</div>

    </>
  )
}

export default App
