import "./portafolio.scss";
import { motion } from "framer-motion";

const Portafolio = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "90vw" }}
      exit={{ x: window.innerWidth }}
      className="portafoliopage"
    >
      <motion.div id="container-titulo-portafolio">ABOUT</motion.div>
    </motion.div>
  );
};

export default Portafolio;
