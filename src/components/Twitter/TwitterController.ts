import { fetchLastTweet } from './TwitterModel';
import { TwitterView } from './TwitterView';

export async function fetchAndRenderLastTweet() {
  try {
    const lastTweet = await fetchLastTweet();
    TwitterView.renderTweet(lastTweet);
  } catch (error) {
    console.error('Error fetching last tweet:', error);
  }
}
