import React, { useState, useEffect, useRef } from "react";
import Card from "./../molecules/Card";
import Header, { Brand } from "../molecules/Header";
import Footer from "./../atoms/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "./../atoms/Button";
import Flexbox from "../containers/Flexbox";
import PropTypes from "prop-types";

function Modal({ title = "Modal", footer = null, children, isVisible = false, onClose = () => {}, size = 700 }) {
  const [visible, setvisible] = useState(true);
  useEffect(() => {
    setvisible(isVisible);
  }, [isVisible]);
  function handleClick(e) {
    onClick(e);
  }
  // const modalBoxRef = useRef(null);
  // useEffect(() => {
  //   if (visible) {
  //     modalBoxRef.current.addEventListener(
  //       "click",
  //       (e) => {
  //         e.stopPropagation();
  //       },
  //       { capture: true }
  //     );
  //   }
  // }, [visible]);

  function handleClose() {
    onClose(false);
    // setvisible(false);
  }
  let brand = new Brand("left", "text", title);
  let header = (
    <Header brand={brand}>
      <div className="close">
        <FiX size={20} onClick={handleClose} className="flex lh-0" style={{ cursor: "pointer" }} />
      </div>
    </Header>
  );
  let _footer = footer ? (
    <Footer className="sp-1">
      <Flexbox className={"aic jcfe"}>
        <Button type="danger" onClick={handleClose}>
          Cancel
        </Button>
        {footer}
      </Flexbox>
    </Footer>
  ) : (
    ""
  );
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          // onClick={(e) => {
          //   handleClose();
          // }}
        >
          <Flexbox className="aic jcc">
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              animate={{ y: "3em", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              style={{ width: size + "px" }}
              // ref={modalBoxRef}
            >
              <Card header={header} footer={_footer} className="modal-box">
                {children}
              </Card>
            </motion.div>
          </Flexbox>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}

Modal.propTypes = {};

export default Modal;
