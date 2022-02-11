export async function fetchApi() {
  const resp = await fetch('https://api.pexels.com/v1/search?query=wedding', {
    headers: {
      Authorization: '563492ad6f9170000100000127ccfbbf167b44a6aca36ac91d39b1a6',
    },
  });
  const data = await resp.json();
  return data.photos;
}
