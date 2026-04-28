/**
 * Extracts the 11-character video id from any common YouTube URL shape
 * (`/embed/ID`, `watch?v=ID`, or `youtu.be/ID`). Returns an empty string
 * if no id can be found.
 */
export const extractYoutubeId = (url) => {
  if (!url) return '';
  const match =
    url.match(/\/embed\/([\w-]{11})/) ||
    url.match(/[?&]v=([\w-]{11})/) ||
    url.match(/youtu\.be\/([\w-]{11})/);
  return match ? match[1] : '';
};

/** Returns the standard-quality thumbnail URL for a YouTube video id. */
export const youtubeThumbnail = (id, quality = 'hqdefault') =>
  id ? `https://i.ytimg.com/vi/${id}/${quality}.jpg` : '';

/**
 * Adds `autoplay=1` to a YouTube embed URL so the iframe starts playing
 * as soon as it is mounted (used by the click-to-play facade pattern).
 */
export const withAutoplay = (url) => {
  if (!url || url.includes('autoplay=1')) return url;
  return url + (url.includes('?') ? '&' : '?') + 'autoplay=1';
};
