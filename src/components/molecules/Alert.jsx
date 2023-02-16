import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Heading from "../atoms/Heading";
import Flexbox from "./../containers/Flexbox";
import Paragraph from "../atoms/Paragraph";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertTriangle, FiX } from "react-icons/fi";
function Alert({ type = "primary", Ico = null, children, title = "Alert", onClick = () => {}, onClose = () => {}, className = "" }) {
  const [visible, setvisible] = useState(true);
  function handleClick(e) {
    onClick(e);
  }
  function handleClose(e) {
    onClose(e);
    setvisible(false);
  }
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div initial={{ x: "-100%", opacity: 0 }} animate={{ x: "0em", opacity: 1 }} exit={{ x: "100%", opacity: 0 }}>
          <Card className={`alert alert-${type}${className ? ` ${className}` : ""}`} onClick={handleClick}>
            <Flexbox gap className="aic">
              <div className="alert-icon">{Ico ? <Ico size={50} className="flex lh-0" /> : <FiAlertTriangle size={50} className="flex lh-0" />}</div>
              <div className="alert-data">
                <Heading type="3">{title}</Heading>
                <Paragraph>{children}</Paragraph>
              </div>
            </Flexbox>
            <div className="close" onClick={handleClose}>
              <FiX size={25} className="flex lh-0" />
            </div>
          </Card>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}

Alert.propTypes = {
  /**
   * Types of Alert
   */
  type: PropTypes.oneOf(["primary", "success", "warning", "danger"]),
  /**
   * Alert Title
   */
  title: PropTypes.node,
  /**
   * Alert Children
   */
  children: PropTypes.node,
  /**
   * Alert action on click
   */
  onClick: PropTypes.func,
  /**
   * Alert classes
   */
  className: PropTypes.string,
};

export default Alert;
