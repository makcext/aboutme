import axios from 'axios';

export async function fetchLastTweet() {
  const response = await axios.get('YOUR_TWITTER_API_ENDPOINT');
  return response.data;
}
