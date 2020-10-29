import React, { useState, useEffect, useRef } from "react"
import wordGame from "./hooks/wordGame"
import useWordGame from "./hooks/wordGame"
/**
 * Challenge:
 *
 * Make the input box focus (DOM elements have a method called .focus())
 * immediately when the game starts
 */

function App() {
  const {
    inputRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  } = useWordGame()
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={inputRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  )
}

export default App
