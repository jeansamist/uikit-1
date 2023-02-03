import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
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
  type: PropTypes.string,
  /**
   * The Icon at left
   */
  leftIcon: PropTypes.node,
  /**
   * The Icon at right
   */
  rightIcon: PropTypes.node,
  /**
   * Field size
   */
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  /**
   * The field text label
   */
  label: PropTypes.string,
  /**
   * Input validity
   */
  valid: PropTypes.bool,
  /**
   * Field state
   */
  activated: PropTypes.bool,
  /**
   * Field Status
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
   * Field classes
   */
  className: PropTypes.string,
  /**
   * Field error
   */
  error: PropTypes.string
}