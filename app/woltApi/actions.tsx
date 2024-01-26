import axios from 'axios';

async function getData() {
  try {
    const res = await axios.get('https://restaurant-api.wolt.com/v1/pages/restaurants?lat=60.170187&lon=24.930599');
    return res.data;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

export default async function WoltApiFetch() {
  const data = await getData();
  return data;
}