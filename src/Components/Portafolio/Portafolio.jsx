import "./portafolio.scss";
import { motion } from "framer-motion";
const Portafolio = () => {
  return (
    <div className="portafoliopage">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="container-titulo-portafolio"
      >
        ABOUT
      </motion.div>
    </div>
  );
};

export default Portafolio;
