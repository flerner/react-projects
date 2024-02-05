import { useEffect, useState } from 'react'
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

export default useCatImage
