/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import { jsx } from "@emotion/core"
import KanjiAnimation from "./CharAnimation"
import { kanjiCard } from "../styling"

export default function KanjiCard({ data, readingMode }) {
  const { character, utf16, number, strokes, meaning } = { ...data }
  const [showAnimation, setShowAnimation] = React.useState(false)
  const [displayType, setDisplayType] = React.useState(readingMode)

  const handleAnimationClick = () => {
    setShowAnimation((state) => !state)
  }

  const handleReadingClick = () => {
    return displayType === "Romaji"
      ? setDisplayType("Kana")
      : setDisplayType("Romaji")
  }

  return (
    <div css={kanjiCard}>
      <div className="left">
        {!showAnimation && <div className="char">{character}</div>}
        {showAnimation && <KanjiAnimation name={utf16} playOnLoad />}
        <div className="info">
          <button
            className="strokes"
            type="button"
            onClick={handleAnimationClick}
          >
            <b>Trazos:</b> {strokes}
          </button>
          <div className="number">
            <b>No:</b> {number}
          </div>
        </div>
      </div>

      <div className="right">
        <button className="reading" type="button" onClick={handleReadingClick}>
          <div className="onyomi">
            <b>On: </b> {data[`onyomi${displayType}`]}
          </div>
          <div className="kunyomi">
            <b>Kun: </b> {data[`kunyomi${displayType}`]}
          </div>
        </button>
        <div className="meaning">
          <b>Significado(s):</b> {meaning}
        </div>
      </div>
    </div>
  )
}

KanjiCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  readingMode: PropTypes.string,
}

KanjiCard.defaultProps = {
  readingMode: "Romaji",
}
