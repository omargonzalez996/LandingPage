import "./contacto.scss";
import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "90vw" }}
      exit={{ x: window.innerWidth }}
      className="pagecontacto"
    >
      <motion.div id="container-titulo-contacto">CONTACT</motion.div>
    </motion.div>
  );
};

export default Contacto;
