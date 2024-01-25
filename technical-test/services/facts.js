async function getRandomFact() {
  const res = await fetch('https://catfact.ninja/fact')
  const data = await res.json()
  const { fact } = data
  return fact
}
export default getRandomFact
