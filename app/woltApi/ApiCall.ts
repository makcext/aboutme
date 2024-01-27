
import axios from 'axios';

async function getData() {
  try {
    const res = await axios.get('https://restaurant-api.wolt.com/v1/pages/restaurants?lat=37.983810&lon=23.727539');
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