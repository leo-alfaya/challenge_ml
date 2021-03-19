const BASE_URL = "http://localhost:3000";

export const getItems = ({ query }) => {
  return fetch(`${BASE_URL}/api/items?q=${query}`)
    .then((response) => response.json())    
};

export const getItemDetail = ({ id }) => {  
  return fetch(`${BASE_URL}/api/items/${id}`) 
    .then((response) => response.json())
};