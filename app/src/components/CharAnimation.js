import React, { useCallback, useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import Icon from "./Icon"

const noop = () => {}

const CharAnimation = ({ name, onReset, onPause }) => {
  const svgRef = useRef(null)
  const [isPaused, setIsPaused] = useState(true)

  const handleReset = useCallback(() => {
    if (svgRef.current) {
      svgRef.current.setCurrentTime(0)
    }
    onReset()
  }, [onReset])

  const handlePause = useCallback(() => {
    setIsPaused((state) => !state)
    onPause()
  }, [onPause])

  useEffect(() => {
    if (!svgRef.current) return
    if (isPaused) {
      svgRef.current.pauseAnimations()
    } else {
      svgRef.current.unpauseAnimations()
    }
  }, [isPaused])

  return (
    <div>
      <Icon
        ref={svgRef}
        name={`0${name}-jlect`}
        onLoad={() => {
          if (svgRef.current) {
            svgRef.current.pauseAnimations()
            svgRef.current.setCurrentTime(0)
          }
        }}
      />
      <div className="controls">
        <button type="button" onClick={handlePause}>
          {isPaused ? "⏵" : "⏸"}
        </button>
        <button type="button" onClick={handleReset}>
          ⟳
        </button>
      </div>
    </div>
  )
}

CharAnimation.propTypes = {
  name: PropTypes.string.isRequired,
  onPause: PropTypes.func,
  onReset: PropTypes.func,
}

CharAnimation.defaultProps = {
  onReset: noop,
  onPause: noop,
}

export default CharAnimation