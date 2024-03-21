import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./pages/Applayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="movies" element={<Movies/>} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
