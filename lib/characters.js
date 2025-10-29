import { endpoint } from '@/utils/endpoint'

export async function getAllCharacters() {
  const data = await fetch(`${endpoint}/characters`)
  console.log(data)
  if (!data.ok) {
    throw new Error('Failed to fetch data')
  
  }

  return data.json()
}