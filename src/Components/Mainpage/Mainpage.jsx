import React from "react";
import "./Main.scss";
import { motion } from "framer-motion";

const Mainpage = () => {
  return (
    <div className="mainpage">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="container-titulo-main"
      >
        HOME
      </motion.div>
    </div>
  );
};
export default Mainpage;
