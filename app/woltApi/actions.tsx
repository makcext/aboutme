"use server"
import Button from '@mui/material/Button';

async function getData() {
  const res = await fetch('https://restaurant-api.wolt.com/v1/pages/restaurants?lat=60.170187&lon=24.930599')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export async function WoltApiFetch() {
  const data = await getData()
 
  return data
}

