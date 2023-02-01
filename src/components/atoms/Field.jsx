import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types'
/**
 * Primary UI component for user interaction
 * 
 * ## Usage
 * 
 * ```jsx
 * 
 * <Field label="label" type="text" />
 * 
 * ```
 */

export default function Field({ label = 'label', type = 'text', leftIcon = null, rightIcon = null, onChange = () => { }, valid = false, activated = false, defaultValue = '', size = 'medium', disabled = false, className = '', error = '' }) {
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
    <div className={`field ${active ? 'active ' : ''}${isValid ? 'valid ' : ''}field-${type} field-${size}${disabled ? ' field-disabled' : ''}${error ? ' field-error' : ''}${className ? ` ${className}` : ''}`}>
      {leftIcon && <div className='field-icon left-icon lh-0'>{leftIcon}</div>}
      <div className={`input-container${rightIcon ? '' : " pr-3"}${leftIcon ? '' : " pl-3"}`}>
        <input disabled={disabled} type={type} value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
        <label className={`${leftIcon ? '' : "no-left"}`}>{label}</label>
      </div>
      {rightIcon && <div className='field-icon right-icon lh-0'>{rightIcon}</div>}
      {error && <span className='field-error-text'>{error}</span>}
    </div>
  )
}
Field.propTypes = {
  /**
   * Type of input
   */
  type: propTypes.string,
  /**
   * The Icon at left
   */
  leftIcon: propTypes.node,
  /**
   * The Icon at right
   */
  rightIcon: propTypes.node,
  /**
   * Field size
   */
  size: propTypes.oneOf(['small', 'medium', 'big']),
  /**
   * The field text label
   */
  label: propTypes.string,
  /**
   * Input validity
   */
  valid: propTypes.bool,
  /**
   * Field state
   */
  activated: propTypes.bool,
  /**
   * Field Status
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
   * Field classes
   */
  className: propTypes.string,
  /**
   * Field error
   */
  error: propTypes.string
}