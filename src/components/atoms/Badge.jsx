import React from "react";
import PropTypes from "prop-types";
/**
 * Primary UI component for user interaction
 *
 * ## Usage
 *
 * ```jsx
 *
 * <Badge>Hello !</Badge>
 *
 * ```
 * or
 *
 * ```jsx
 *
 *  <Badge label="Hello !" />
 *
 * ```
 */
export default function Badge({
  type = "primary",
  leftIcon = null,
  rightIcon = null,
  size = "medium",
  label = null,
  children = null,
  onClick = () => {},
  disabled = false,
  className = null,
}) {
  function handdleClick(e) {
    if (!disabled) {
      console.log("click");
      onClick(e);
    }
  }
  return (
    <div
      className={`badge badge-${type} badge-${size}${disabled ? " badge-disabled" : ""}${className ? ` ${className}` : ""}`}
      onClick={handdleClick}
    >
      <div className={`flex ${(label || children) && type === "large" ? " jcc " : " jcsa "} aic${label || children ? " flex-gap" : ""}`}>
        {leftIcon && <div className="left-icon lh-0">{leftIcon}</div>}
        {label ? <div className="content">{label}</div> : children ? <div className="content">{children}</div> : ""}
        {rightIcon && <div className="right-icon lh-0">{rightIcon}</div>}
      </div>
    </div>
  );
}
Badge.propTypes = {
  /**
   * Types of Badge
   */
  type: PropTypes.oneOf(["primary", "secondary", "success", "warning", "danger"]),
  /**
   * The Icon at left
   */
  leftIcon: PropTypes.node,
  /**
   * The Icon at right
   */
  rightIcon: PropTypes.node,
  /**
   * Badge size
   */
  size: PropTypes.oneOf(["small", "medium", "big"]),
  /**
   * The Badge text label
   */
  label: PropTypes.string,
  /**
   * Badge Children
   */
  children: PropTypes.node,
  /**
   * Badge Status
   */
  disabled: PropTypes.bool,
  /**
   * Badge action on click
   */
  onClick: PropTypes.func,
  /**
   * Badge classes
   */
  className: PropTypes.string,
};
