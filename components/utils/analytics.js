export const GA_TRACKING_ID = 'G-WN0YMDN8RR'; // replace with your Google Analytics tracking ID

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};