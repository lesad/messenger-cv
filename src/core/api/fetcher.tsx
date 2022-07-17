function fetcher(url: string, headers: Headers) {
  return fetch(`http://localhost:${process.env.PORT}/${url}`, {
    headers,
  })
    .then((response) => response.json())
    .then((r) => r.data);
}

export default fetcher;
