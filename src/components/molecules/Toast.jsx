import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import Flexbox from "../containers/Flexbox";
import { FiBell } from "react-icons/fi";
import Card from "./Card";
function Toast({ children, type = "primary", className = "", onClick = () => {}, duration = 5000 }) {
  const [visible, setvisible] = useState(true);
  const [timerpause, settimerpause] = useState(false);
  useEffect(() => {
    if (visible && !timerpause) {
      let i = setTimeout(() => {
        setvisible(false);
      }, duration);
      return () => {
        clearInterval(i);
      };
    }
  }, [timerpause]);

  function onHover() {
    settimerpause(true);
  }
  function onLeave() {
    settimerpause(false);
  }
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0em", opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          onClick={(e) => onClick(e)}
          onHoverStart={onHover}
          onHoverEnd={onLeave}
        >
          <Card className={`toast toast-${type}${className ? ` ${className}` : ""}`} border={false}>
            <Flexbox className="aic" gap>
              <div className="toast-icon">{/* <FiBell size={20} className="flex lh-0" /> */}</div>
              {children}
            </Flexbox>
          </Card>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}

Toast.propTypes = {
  /**
   * Types of Toast
   */
  type: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
  /**
   * Toast Children
   */
  children: PropTypes.node,
  /**
   * Toast action on click
   */
  onClick: PropTypes.func,
  /**
   * Toast classes
   */
  className: PropTypes.string,
};

export default Toast;
