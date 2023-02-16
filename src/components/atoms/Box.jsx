import React from "react";
import PropTypes from "prop-types";
/**
 * Boxes
 *
 * ## Usage
 *
 * ```jsx
 *
 * <Box>Content</Box>
 *
 * ```
 */

export default function Box({
  children = null,
  padding = false,
  radius = false,
  border = false,
  backgroundImage = "",
  onClick = () => {},
  className = "",
}) {
  return (
    <div
      onClick={onClick}
      className={`box${border ? " box-border" : ""}${radius ? " box-radius" : ""}${padding ? " box-padding" : ""}${className ? ` ${className}` : ""}`}
      style={{
        background: backgroundImage ? 'url("' + backgroundImage + '") no-repeat center / cover' : "var(--backgroundLight)",
      }}
    >
      <div className="box-content">{children}</div>
    </div>
  );
}

Box.propTypes = {
  /**
   * Box Content
   */
  children: PropTypes.node,
  /**
   * If box have a padding
   */
  padding: PropTypes.bool,
  /**
   * If box have a radius
   */
  radius: PropTypes.bool,
  /**
   * If box have a border
   */
  border: PropTypes.bool,
  /**
   * Background Image
   */
  backgroundImage: PropTypes.string,
  /**
   * Box classes
   */
  className: PropTypes.string,
};
