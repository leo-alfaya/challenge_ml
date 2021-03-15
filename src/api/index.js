const BASE_URL = "https://api.mercadolibre.com";

export const getProducts = ({ query }) => {
  return fetch(`${BASE_URL}/sites/MLA/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => [false, data])
    .catch((error) => [true, error]);
};

export const getProductDetail = ({ id }) => {
  const url = encodeURI(`${BASE_URL}/items/${id}`)
  
  return fetch(url) 
    .then((response) => response.json())
    .then((data) => [false, data])
    .catch((error) => [true, error]);
};

export const getProductDescription = ({ id }) => {
  const url = encodeURI(`${BASE_URL}/items/${id}/description`)
  
  return fetch(url) 
    .then((response) => response.json())
    .then((data) => [false, data])
    .catch((error) => [true, error]);
};