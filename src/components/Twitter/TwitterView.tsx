import React from 'react';
import { Typography } from '@mui/material';

interface TweetProps {
  text: string;
}

export function Tweet({ text }: TweetProps) {
  return (
    <>
      <Typography>Last {Tweet.name}</Typography>
      <p>{text}</p>
    </>
  );
}

export const TwitterView = {
  renderTweet(tweet: string) {
    const tweetElement = <Tweet text={tweet} />;
    console.log(tweetElement);
    // Render the tweet element to your desired location in the UI
    // For example, you can use ReactDOM.render or your preferred method.
  },
};