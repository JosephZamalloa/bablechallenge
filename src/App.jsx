import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import Details from "./pages/Details";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MainLayout>
        <Routes>
          
            <Route exact path="/" element={<Home/>} />
            <Route path="/products/detail/:id" element={<Details/>} />
          
        </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
