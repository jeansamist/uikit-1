import React from 'react'
import PropTypes from 'prop-types'

function Paragraph({ quote = false, padding = false, type = '1', className = '', children }) {
  return (
    <div className={`paragraph paragraph-${type}${quote ? ` paragraph-quote` : ''}${padding ? ` paragraph-padding` : ''}${className ? ` ${className}` : ''}`}>{children}</div>
  )
}
Paragraph.propTypes = {
  type: PropTypes.oneOf(['1', '2', '3', '4']),
  quote: PropTypes.bool,
  padding: PropTypes.bool,
  children: PropTypes.node,
  /**
   * paragraph classes
   */
  className: PropTypes.string,
}
export default Paragraph
