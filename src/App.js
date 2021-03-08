import { useEffect } from "react";

const App = () => {
  const getProducts = ({ query }) => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => [false, data])
      .catch((error) => [true, error]);
  };

  useEffect(async () => {
    const [hasError, result] = await getProducts({ query: "sansumg" });

    if (!hasError) {
      console.log("result => ", result);
    } else {
      console.log("error => ", result)
    }
  }, []);

  return <p>App</p>;
};

export default App;
