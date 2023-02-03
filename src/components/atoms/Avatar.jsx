import React from 'react'
import PropTypes from 'prop-types'

export default function Avatar({ size = 'medium', image, disabled = false, className = '' }) {
  return (
    <div className={`avatar avatar-${size}${disabled ? ' avatar-disabled' : ''}${className ? ` ${className}` : ''}`}>
      <img src={image} alt="avatar" />
    </div>
  )
}

Avatar.propTypes = {
  /**
   * Avatar size
   */
  size: PropTypes.oneOf(['small', 'medium', 'big', 'large', 'hyperlarge']),
  /**
   * Avatar Image Url
   */
  image: PropTypes.string.isRequired,
  /**
   * Avatar disabled
   */
  disabled: PropTypes.bool,
  /**
   * Avatar classes
   */
  className: PropTypes.string
}
