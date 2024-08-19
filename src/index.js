import React from 'react';   //react coming from node module
import ReactDOM from 'react-dom/client';    //reactDOM coming from node module
import './index.css';
import App from './App';
import { Outlet,RouterProvider,createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Top10 from './pages/Top10'
import Watchlist from './pages/Watchlist'
import Trending from './pages/Trending'
import Popular from './pages/Popular'
import { appStore } from './store/appStore';
import { createContext } from "react";
import { Provider } from "react-redux";


export const Data = createContext();


const Aplayout=()=>{
  return(
    <Provider store={appStore}>
      <Data.Provider value={"Anmol"}>
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
    </Data.Provider>
    </Provider>
  )
}

const approuter= createBrowserRouter([{
  element:(<Aplayout/>),
  children:[
    {path:"/",element:<Home/>},
    {path:"/top10" ,element:<Top10/>},
    {path:"/watchlist" ,element:<Watchlist/>},
    {path:"/popular" ,element:<Popular/>},
    {path:"/trending" ,element:<Trending/>},

  ],
},]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={approuter}/>);


