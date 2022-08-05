import { useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'

export const useGQLQuery = (key, queries, variables, config = {}) => {
  const endpoint = 'http://localhost:4000'
  const fetchData = async () => await request(endpoint, queries, variables)
  // console.log('hola')
  return useQuery(key, fetchData, config)
}
