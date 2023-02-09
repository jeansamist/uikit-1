import React from 'react'
import PropTypes from 'prop-types'

function Flexbox({ gap = false, children, style = {}, className = '' }) {
  return <div style={{ ...style }} className={`flex${(gap ? ' flex-gap' : '')}${className ? ` ${className}` : ''}`}>{children}</div>;
}

Flexbox.propTypes = {
  gap: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
}
export default Flexbox
