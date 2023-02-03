import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
/**
 * Toggelable checkboxes
 * 
 * ## Usage
 * 
 * ```jsx
 * 
 * <Checkbox />
 * 
 * ```
 */
export default function Checkbox({ id = 'id-' + (Math.random() * Math.random() * 100), size = 'medium', actived = false, onChange = () => { }, disabled = false, className = null }) {
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    if (actived) setchecked(true)
  }, [actived])

  const handleChange = () => {
    if (!disabled) {
      setchecked(!checked);
      onChange(!checked)
    }
  };
  return (
    <div className={`checkbox checkbox-${size}${disabled ? ' checkbox-disabled' : ''}${className ? ` ${className}` : ''}`}>
      <input type="checkbox" checked={checked} onChange={handleChange} id={id} />
      <label htmlFor={id}></label>
    </div>
  )
}

Checkbox.propTypes = {
  /**
   * Checkbox Id
   */
  id: PropTypes.number,
  /**
   * Checkbox size
   */
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  /**
   * Checkbox Status
   */
  actived: PropTypes.bool,
  /**
   * Checkbox Status
   */
  disabled: PropTypes.bool,
  /**
   * Checkbox action on click
   */
  onChange: PropTypes.func,
  /**
   * Checkbox classes
   */
  className: PropTypes.string
}