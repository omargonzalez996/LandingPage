import "./contacto.scss";
import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="container-titulo-contacto"
    >
      CONTACT
    </motion.div>
  );
};

export default Contacto;
