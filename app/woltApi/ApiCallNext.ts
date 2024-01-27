//'https://restaurant-api.wolt.com/v1/pages/restaurants?lat=37.983810&lon=23.727539'

async function getData() {
  const res = await fetch('https://restaurant-api.wolt.com/v1/pages/restaurants?lat=37.983810&lon=23.727539', { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function FetchNext() {
  const data = await getData()
 
  return (data)
}