import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './src/start/Layout/Layout';

import Home from "./src/start/Home/Home";
import Register_Page from "./src/start/Register_Page/Register_Page";
import Search_Page from "./src/start/Search_Page/Search_Page";
import Signin_Page from "./src/start/Signin_Page/Signin_Page";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register_Page />} />
          <Route path="signin" element={<Signin_Page />} />
          <Route path="search" element={<Search_Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)