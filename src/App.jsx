

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
// import Router from './Router/Router'
import About from './pages/AboutUs/About';
import Layout from './components/Layout/Layout';
import Contact from './pages/Contact/Contact';
import Products from './pages/Products/Products';
import Details from './pages/Products/Details';
import Notfound from './pages/NotFound/Notfound';



const router=createBrowserRouter([

{
  path:'/',
  element:<Layout/>,
  children:[
  {index:true ,element:<Home/>}
  ,{path:"/about" , element:<About/>},
  {path:"/contact", element:<Contact/>},
  {path:"/products", element:<Products/>},
  {path:"/details/:id",element:<Details/>},
  {path:"*",element:<Notfound/>}

  ]
}
])

function App() {


  return (
    <>

    <RouterProvider router={router}/>
       {/* <Router/> */}

    </>
  )
}

export default App
