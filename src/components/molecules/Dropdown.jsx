import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
export default function Dropdown({
  elements = [
    { to: "#", Ico: FaPencilAlt, label: "Dropdown", type: "button", onClick: () => {} },
    { to: "#", Ico: FaPencilAlt, label: "Dropdown", type: "button", onClick: () => {} },
  ],
  children = "Dropdown",
  className = "",
}) {
  const [active, setactive] = useState(false);
  return (
    <div tabIndex={1} onBlur={() => setactive(false)} className={`dropdown-container${className ? ` ${className}` : ""}`}>
      <div className="dropdown-label" onClick={() => setactive(!active)}>
        {children}
      </div>
      <AnimatePresence>
        {active ? (
          <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className="dropdown">
            {elements.map((element, key) => (
              <DropdownElement
                key={key}
                {...{
                  ...element,
                  onClick: () => {
                    element.onClick();
                    setactive(false);
                  },
                }}
              />
            ))}
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </div>
  );
}

function DropdownElement({ to = "#", type = "button", Ico = FaPencilAlt, label = "Dropdown", onClick = () => {} }) {
  if (type === "link") {
    return (
      <Link to={to} onClick={onClick} className="dropdown-element">
        <div className="ico">
          <Ico />
        </div>
        <div className="label">{label}</div>
      </Link>
    );
  }
  return (
    <div onClick={onClick} className="dropdown-element">
      <div className="ico">
        <Ico />
      </div>
      <div className="label">{label}</div>
    </div>
  );
}

// Field.propTypes = {
//   /**
//    * Type of input
//    */
//   type: PropTypes.string,
//   /**
//    * The Icon at left
//    */
//   leftIcon: PropTypes.node,
//   /**
//    * The Icon at right
//    */
//   rightIcon: PropTypes.node,
//   /**
//    * Field size
//    */
//   size: PropTypes.oneOf(["small", "medium", "big"]),
//   /**
//    * The field text label
//    */
//   label: PropTypes.string,
//   /**
//    * Input validity
//    */
//   valid: PropTypes.bool,
//   /**
//    * Field state
//    */
//   activated: PropTypes.bool,
//   /**
//    * Field Status
//    */
//   disabled: PropTypes.bool,
//   /**
//    * Input default value
//    */
//   defaultValue: PropTypes.string,
//   /**
//    * Input action on change
//    */
//   onChange: PropTypes.func,
//   /**
//    * Field classes
//    */
//   className: PropTypes.string,
//   /**
//    * Field error
//    */
//   error: PropTypes.string,
// };
