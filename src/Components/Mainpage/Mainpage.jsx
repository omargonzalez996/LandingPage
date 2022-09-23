import React from "react";
import "./Main.scss";
import { motion } from "framer-motion";

const Mainpage = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "90vw" }}
      exit={{ x: window.innerWidth }}
      className="mainpage"
    >
      <div id="container-titulo-main">HOME</div>
      <div id="contenedor-info">
        <div className="contenedor-imagen">
          <img
            src="https://images.squarespace-cdn.com/content/v1/596f3395725e25fb89b4143c/1501016849661-50INSHZE2KOWDJD1IJTV/Geometric+pattern+squares+001.jpg"
            alt="img"
          />
        </div>
        <div className="contenedor-texto">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea a
            dolorem deserunt facere maxime quo facilis! Voluptate architecto
            aliquid explicabo, numquam vel nesciunt, deserunt fuga eveniet ullam
            laudantium eligendi!
          </p>
        </div>
      </div>
      <div id="contenedor-info">
        <div className="contenedor-imagen">
          <img
            src="https://images.squarespace-cdn.com/content/v1/596f3395725e25fb89b4143c/1501016849661-50INSHZE2KOWDJD1IJTV/Geometric+pattern+squares+001.jpg"
            alt="img"
          />
        </div>
        <div className="contenedor-texto">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea a
            dolorem deserunt facere maxime quo facilis! Voluptate architecto
            aliquid explicabo, numquam vel nesciunt, deserunt fuga eveniet ullam
            laudantium eligendi!
          </p>
        </div>
      </div>
      <div id="contenedor-info">
        <div className="contenedor-imagen">
          <img
            src="https://images.squarespace-cdn.com/content/v1/596f3395725e25fb89b4143c/1501016849661-50INSHZE2KOWDJD1IJTV/Geometric+pattern+squares+001.jpg"
            alt="img"
          />
        </div>
        <div className="contenedor-texto">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea a
            dolorem deserunt facere maxime quo facilis! Voluptate architecto
            aliquid explicabo, numquam vel nesciunt, deserunt fuga eveniet ullam
            laudantium eligendi!
          </p>
        </div>
      </div>
      <div id="contenedor-info">
        <div className="contenedor-imagen">
          <img
            src="https://images.squarespace-cdn.com/content/v1/596f3395725e25fb89b4143c/1501016849661-50INSHZE2KOWDJD1IJTV/Geometric+pattern+squares+001.jpg"
            alt="img"
          />
        </div>
        <div className="contenedor-texto">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea a
            dolorem deserunt facere maxime quo facilis! Voluptate architecto
            aliquid explicabo, numquam vel nesciunt, deserunt fuga eveniet ullam
            laudantium eligendi!
          </p>
        </div>
      </div>
      <div id="contenedor-info">
        <div className="contenedor-imagen">
          <img
            src="https://images.squarespace-cdn.com/content/v1/596f3395725e25fb89b4143c/1501016849661-50INSHZE2KOWDJD1IJTV/Geometric+pattern+squares+001.jpg"
            alt="img"
          />
        </div>
        <div className="contenedor-texto">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed ea a
            dolorem deserunt facere maxime quo facilis! Voluptate architecto
            aliquid explicabo, numquam vel nesciunt, deserunt fuga eveniet ullam
            laudantium eligendi!
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default Mainpage;
