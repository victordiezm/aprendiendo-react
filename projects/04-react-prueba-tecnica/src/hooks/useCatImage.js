import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

//Custom Hook. No se pueden usar hooks en funciones normales, solo en custom hooks.
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  // Para recuperar la imágen cada vez que tengamos una cita
  useEffect(() => {
    if(!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(res => {
        const { _id } = res
        const url = `/cat/${_id}/says/${threeFirstWords}`

        setImageUrl(url)
      })
  },[fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}