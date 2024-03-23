import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./pages/Applayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import ScrollToTop from "./components/ScrollToTop";
import SingleMovieDetails from "./pages/SingleMovieDetails";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="singlemoviedetails/:id" element={<SingleMovieDetails />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
