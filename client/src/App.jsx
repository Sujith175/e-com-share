import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Signup } from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
