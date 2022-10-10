import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Main from './components/Main';
import Convert from './components/Convert';
import Home from './components/Home'
import RootLayout from './components/RootLayout';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="convertidor" element={<Convert />} />
      <Route path="calculadora" element={<Main />} />
    </Route>
  ))



function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;


//index elements es el que sera tomado como inicio
//el rootLayout sera la base de donde ser renderizan los demas componentes
