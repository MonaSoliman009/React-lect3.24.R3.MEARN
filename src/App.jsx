

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
// import Router from './Router/Router'
import Layout from './components/Layout/Layout';
import Contact from './pages/Contact/Contact';
import Products from './pages/Products/Products';
import Details, { detailsLoader } from './pages/Products/Details';
import Notfound from './pages/NotFound/Notfound';
import React from 'react';
import Error from './components/Error/Error';
import { Provider } from 'react-redux';
import { store } from './store/store';



const About = React.lazy(() => import('./pages/AboutUs/About'))


const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout />,

    children: [
      { index: true, element: <Home /> }
      , { path: "/about", element: <React.Suspense fallback={<h1>Loading...</h1>}><About /></React.Suspense> },
      { path: "/contact", element: <Contact />, errorElement: <Error /> },
      { path: "/products", element: <Products /> },
      { path: "/details/:id", element: <Details />, loader: detailsLoader, errorElement: <Error />, },
      { path: "*", element: <Notfound /> }

    ]
  }
])

function App() {


  return (
    <>

      <Provider store={store}>

        <RouterProvider router={router} />
      </Provider>
      {/* <Router/> */}

    </>
  )
}

export default App
