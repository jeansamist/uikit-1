import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
/**
 * Toggelable Radios
 * 
 * ## Usage
 * 
 * ```jsx
 * 
 * <Radio />
 * 
 * ```
 */
export default function Radio({ id = 'id-' + (Math.random() * Math.random() * 100), size = 'medium', actived = false, onChange = () => { }, disabled = false, className = null }) {
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
    <div className={`radio radio-${size}${disabled ? ' radio-disabled' : ''}${className ? ` ${className}` : ''}`}>
      <input type="radio" checked={checked} onChange={handleChange} id={id} />
      <label htmlFor={id}></label>
    </div>
  )
}

Radio.propTypes = {
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