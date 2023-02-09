import React from 'react'
import PropTypes from 'prop-types'

function TextLink({ size = 'medium', href = '/', children, className = '' }) {
  return (
    <a href={href} className={`textlink textlink-${size}${className ? ` ${className}` : ''}`}>{children}</a>
  )
}

TextLink.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'big']),
  href: PropTypes.string,
  children: PropTypes.node,
  /**
   * textlink classes
   */
  className: PropTypes.string,
}

export default TextLink
