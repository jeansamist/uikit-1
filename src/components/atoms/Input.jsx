import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * Primary UI component for user interaction
 * 
 * ## Usage
 * 
 * ```jsx
 * 
 * <Input label="label" type="text" />
 * 
 * ```
 */
export default function Input({ label = 'label', type = 'text', onChange = () => { }, valid = false, activated = false, defaultValue = '', size = 'medium', disabled = false, className = '', error = false }) {
  const [active, setactive] = useState(false);
  const [isValid, setisValid] = useState(false);
  const [value, setvalue] = useState('');
  useEffect(() => {
    setvalue(defaultValue);
    setactive(activated);
    setisValid(valid)
  }, [activated, defaultValue, valid]);

  function handleChange(e) {
    if (disabled) return
    let newValue = e.target.value;
    setvalue(newValue);
    onChange(newValue);
  }
  function handleFocus(e) {
    if (disabled) return
    setactive(true)
    setisValid(false);
  }

  function handleBlur(e) {
    if (disabled) return
    if (value === '') {
      setactive(false);
    } else {
      setactive(true);
      setisValid(true);
    }
  }
  return (
    <input placeholder={label} disabled={disabled} type={type} value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} className={`input ${active ? 'active ' : ''}${isValid ? 'valid ' : ''}input-${type} input-${size}${disabled ? ' input-disabled' : ''}${error ? ' input-error' : ''}${className ? ` ${className}` : ''}`} />
  )
}
Input.propTypes = {
  /**
   * Type of input
   */
  type: PropTypes.string,
  /**
   * Input size
   */
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  /**
   * The input text placehoder
   */
  label: PropTypes.string,
  /**
   * Input validity
   */
  valid: PropTypes.bool,
  /**
   * Input state
   */
  activated: PropTypes.bool,
  /**
   * Input Status
   */
  disabled: PropTypes.bool,
  /**
   * Input default value
   */
  defaultValue: PropTypes.string,
  /**
   * Input action on change
   */
  onChange: PropTypes.func,
  /**
   * Input classes
   */
  className: PropTypes.string,
  /**
   * Input error
   */
  error: PropTypes.bool
}