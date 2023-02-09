import React from 'react'
import PropTypes from 'prop-types'

function Grid({ gap = true, columns = 2, children, style = {}, className = '' }) {
  return (
    <div style={{ ...style, gridTemplateColumns: `repeat(${columns}, 1fr)` }} className={`grid grid-${columns}${(gap ? ' grid-gap' : '')}${className ? ` ${className}` : ''}`}>{children}</div>
  )
}

Grid.propTypes = {
  gap: PropTypes.bool,
  columns: PropTypes.number,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
}

export default Grid
