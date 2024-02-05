import { useEffect, useState } from 'react'
import './App.css'
import useCatFact from './hooks/useCatFacts.js'
import useCatImage from './hooks/useCatImage.js'
// eslint-disable-next-line space-before-function-paren

export function App() {
  const { fact, getAndUpdateFact } = useCatFact()
  const { img } = useCatImage({ fact })

  function handleClick() {
    getAndUpdateFact()
  }
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>New Fact</button>
      {fact && <p>{fact}</p>}
      {img && <img src={img} alt='cat' />}
    </main>
  )
}
