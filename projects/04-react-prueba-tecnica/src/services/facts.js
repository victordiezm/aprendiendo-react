const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export async function getRandomFact() {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}