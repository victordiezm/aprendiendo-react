import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies.js'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  //useCallback es igual que useMemo, pero para funciones
  const getMovies = useCallback(async ({search}) => {
      if (search === previousSearch.current) return

      try {
        setLoading(true)
        setLoading(null)
        previousSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
  }, [])  

  const sortedMovies = useMemo(() => { 
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies:sortedMovies , getMovies, loading }
}