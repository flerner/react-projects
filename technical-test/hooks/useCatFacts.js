import { useState, useEffect } from 'react'
import getRandomFact from '../services/facts.js'
function useCatFact() {
  const [fact, setFact] = useState()
  const getAndUpdateFact = async () => {
    const f = await getRandomFact()
    setFact(f)
  }
  useEffect(getAndUpdateFact, [])
  return { fact, getAndUpdateFact }
}

export default useCatFact
