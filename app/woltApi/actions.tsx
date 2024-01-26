"use server"

async function getData() {
  try {
    const res = await fetch('https://restaurant-api.wolt.com/v1/pages/restaurants?lat=60.170187&lon=24.930599')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
 
export default async function WoltApiFetch() {
  const data = await getData()
 
  return data
}

