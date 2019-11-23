import React from 'react'
import PropTypes from 'prop-types'
import Svg, { Path } from 'react-native-svg'

const CustomSvg = ({
  D, size, fill, style, viewBoxSize,
}) => {
  const viewBox = `0 0 ${viewBoxSize} ${viewBoxSize}`
  return (
    <Svg
      height={`${size}`}
      width={`${size}`}
      viewBox={viewBox}
      fill={fill}
      style={style}
    >
      <Path d={D} />
    </Svg>
  )
}

CustomSvg.propTypes = {
  D: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string,
  style: PropTypes.object,
  viewBoxSize: PropTypes.number,
}

CustomSvg.defaultProps = {
  size: 32,
  fill: null,
  style: {},
  viewBoxSize: 24,
}

export default CustomSvg
