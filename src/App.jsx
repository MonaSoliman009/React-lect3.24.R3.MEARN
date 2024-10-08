

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
// import Router from './Router/Router'
import Layout from './components/Layout/Layout';
import Contact from './pages/Contact/Contact';
import Products from './pages/Products/Products';
import Details, { detailsLoader } from './pages/Products/Details';
import Notfound from './pages/NotFound/Notfound';
import React, { useEffect, useState } from 'react';
import Error from './components/Error/Error';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider } from './contexts/theme';
import Protected from './components/Protected/Protected';
import { AuthProvider } from './contexts/Auth';
import Login from './pages/Login/Login';
import { IntlProvider } from 'react-intl';



const About = React.lazy(() => import('./pages/AboutUs/About'))


const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,

    children: [
      { index: true, element: <Home /> }
      , { path: "/about", element: <React.Suspense fallback={<h1>Loading...</h1>}><About /></React.Suspense> },
      { path: "/contact", element: <Contact />, errorElement: <Error /> },
      { path: "/products", element: <Protected x={10}><Products/></Protected> },
      {path:'/login',element:<Login/>},
      { path: "/details/:id", element: <Details />, loader: detailsLoader, errorElement: <Error />, },
      { path: "*", element: <Notfound /> }

    ]
  }
])

function App() {

 const [theme,setTheme]  =useState("light")

 const [isAuth,setAuth]  =useState((localStorage.getItem("token"))?true:false)
 
 useEffect(()=>{

  if(!localStorage.getItem("lang")){

    localStorage.setItem("lang","en")
  }

 },[])
  return (
    <>



<IntlProvider>
<Provider store={store}>
        <ThemeProvider value={{theme,setTheme}}>
          <AuthProvider value={{isAuth,setAuth}}>

          <RouterProvider router={router} />


          </AuthProvider>
          





        </ThemeProvider>
      </Provider>


</IntlProvider>
    
      {/* <Router/> */}

    </>
  )
}

export default App



// []   ,  >> api call  >> [{},{},{}]