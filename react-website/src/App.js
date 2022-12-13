import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home/Home"
import Actual from "./pages/Actual/Actual"
import Contact from "./pages/Contact/Contact"
import Cooperation from "./pages/Cooperation/Cooperation"
import Faq from "./pages/FAQ/Faq"
import Admin from "./pages/Admin/Admin"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/actual" element={<Actual />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cooperation" element={<Cooperation />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
  );
}

export default App;
