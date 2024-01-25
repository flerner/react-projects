import { useEffect, useState } from 'react'
import './App.css'
import getRandomFact from './services/facts.js'

function useCatImage({ fact }) {
  const [img, setImg] = useState()
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then((res) => res.json())
      .then((response) => {
        console.log(`https://cataas.com/cat/${response._id}/says/${firstWord}`)
        setImg(`https://cataas.com/cat/${response._id}/says/${firstWord}`)
      })
  }, [fact])
  return { img }
}

// eslint-disable-next-line space-before-function-paren
export function App() {
  const [fact, setFact] = useState()
  const { img } = useCatImage({ fact })

  useEffect(async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }, [])

  async function handleClick() {
    const newFact = await getRandomFact()
    setFact(newFact)
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
