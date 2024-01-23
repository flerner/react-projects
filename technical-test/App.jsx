import { useEffect, useState } from 'react'
import './App.css'
// eslint-disable-next-line space-before-function-paren
export function App() {
  const [fact, setFact] = useState('hi')
  const [img, setImg] = useState()
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        const firstWord = fact.split(' ')[0]
        setFact(fact)

        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
          .then((res) => res.json())
          .then((response) => {
            setImg(`https://cataas.com/cat/${response._id}/says/${firstWord}`)
          })
      })
  }, [])
  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {img && <img src={img} alt='cat' />}
    </main>
  )
}
