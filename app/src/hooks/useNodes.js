import { useState, useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"

export default function useNodes(from, select) {
  const location = useLocation()
  const query = useRef(null)
  const [content, setContent] = useState([])

  useEffect(() => {
    query.current = document.querySelector(from).querySelectorAll(select)
  }, [location, from, select])

  useEffect(() => {
    if (query.current !== null) {
      setContent([...query.current])
    }
  }, [location])

  return content
}

useNodes.propTypes = {
  from: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
}
