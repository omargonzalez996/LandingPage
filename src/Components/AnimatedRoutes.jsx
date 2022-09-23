import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Contacto from "./Contacto/Contacto";
import Mainpage from "./Mainpage/Mainpage";
import Portafolio from "./Portafolio/Portafolio";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Mainpage />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Mainpage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
