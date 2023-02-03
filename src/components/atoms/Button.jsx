import React from 'react'
import PropTypes from 'prop-types'
/**
 * Primary UI component for user interaction
 * 
 * ## Usage
 * 
 * ```jsx
 * 
 * <Button>Hello !</Button>
 * 
 * ```
 * or
 * 
 * ```jsx
 * 
 *  <Button label="Hello !" />
 * 
 * ```
 */
export default function Button({ type = 'primary', leftIcon = null, rightIcon = null, size = 'medium', label = null, children = null, onClick = () => { }, disabled = false, className = null }) {
  function handdleClick(e) {
    if (!disabled) {
      console.log('click');
      onClick(e)
    }
  }
  return (
    <button className={`btn btn-${type} btn-${size}${disabled ? ' btn-disabled' : ''}${className ? ` ${className}` : ''}`} onClick={handdleClick}>
      <div className={`flex ${(label || children) && (type === 'large') ? ' jcc ' : ' jcsa '} aic${label || children ? ' flex-gap' : ''}`}>
        {leftIcon && <div className='left-icon lh-0'>{leftIcon}</div>}
        {label ? <div className="content">{label}</div> : (children ? <div className="content">{children}</div> : '')}
        {rightIcon && <div className='right-icon lh-0'>{rightIcon}</div>}
      </div>
    </button>
  )
}
Button.propTypes = {
  /**
   * Types of button
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
  /**
   * The Icon at left
   */
  leftIcon: PropTypes.node,
  /**
   * The Icon at right
   */
  rightIcon: PropTypes.node,
  /**
   * Button size
   */
  size: PropTypes.oneOf(['small', 'medium', 'big', 'large']),
  /**
   * The button text label
   */
  label: PropTypes.string,
  /**
   * Button Children
   */
  children: PropTypes.node,
  /**
   * Button Status
   */
  disabled: PropTypes.bool,
  /**
   * Button action on click
   */
  onClick: PropTypes.func,
  /**
   * Button classes
   */
  className: PropTypes.string
}