import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'

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
  type: propTypes.string,
  /**
   * Input size
   */
  size: propTypes.oneOf(['small', 'medium', 'big']),
  /**
   * The input text placehoder
   */
  label: propTypes.string,
  /**
   * Input validity
   */
  valid: propTypes.bool,
  /**
   * Input state
   */
  activated: propTypes.bool,
  /**
   * Input Status
   */
  disabled: propTypes.bool,
  /**
   * Input default value
   */
  defaultValue: propTypes.string,
  /**
   * Input action on change
   */
  onChange: propTypes.func,
  /**
   * Input classes
   */
  className: propTypes.string,
  /**
   * Input error
   */
  error: propTypes.bool
}