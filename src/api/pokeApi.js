import { useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'
export const useGQLQuery = (key, queries, variables, config = {}) => {
  const endpoint = import.meta.env.VITE_GRAPHQL_HOST
  const fetchData = async () => await request(endpoint, queries, variables)
  return useQuery(key, fetchData, config)
}
