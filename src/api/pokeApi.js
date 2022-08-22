import { useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'
const mode = import.meta.env.MODE
export const useGQLQuery = (key, queries, variables, config = {}) => {
  const endpoint = mode === 'development' ? 'http://localhost:4000' : 'https://graphql-pokeapp-production.up.railway.app'
  const fetchData = async () => await request(endpoint, queries, variables)
  return useQuery(key, fetchData, config)
}
