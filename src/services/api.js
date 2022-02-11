export async function fetchApi() {
  const resp = await fetch('https://api.pexels.com/v1/search?query=wedding', {
    headers: {
      Authorization: process.env.REACT_APP_API_KEY,
    },
  });
  const data = await resp.json();
  return data.photos;
}
