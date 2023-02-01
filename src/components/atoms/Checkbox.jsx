import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
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
  id: propTypes.number,
  /**
   * Checkbox size
   */
  size: propTypes.oneOf(['small', 'medium', 'big']),
  /**
   * Checkbox Status
   */
  actived: propTypes.bool,
  /**
   * Checkbox Status
   */
  disabled: propTypes.bool,
  /**
   * Checkbox action on click
   */
  onChange: propTypes.func,
  /**
   * Checkbox classes
   */
  className: propTypes.string
}