export function fetchCategory() {
  return fetch(`/freshflowers/products`).then(response => response.json());
}
