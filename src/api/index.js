const BASE_URL = "https://api.mercadolibre.com";

export const getProducts = ({ query }) => {
  return fetch(`${BASE_URL}/sites/MLA/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => [false, data])
    .catch((error) => [true, error]);
};

export default {
  getProducts,
};
