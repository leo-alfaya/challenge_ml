import { useEffect } from "react";
import { connect } from "react-redux"
import { setProducts } from './redux/actions'

const App = ({ products, setProducts }) => {
  const getProducts = ({ query }) => {
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then((response) => response.json())
      .then((data) => [false, data])
      .catch((error) => [true, error]);
  };

  useEffect(() => {
    async function initialFetch() {
      const [hasError, result] = await getProducts({ query: "apple" });

      if (!hasError) {
        setProducts(result.results)
      } else {
        console.log("error => ", result);
      }
    }

    return initialFetch()
  }, []);

  useEffect(() => {
    console.log("products => ", products)
  }, [products])

  return <p>App</p>;
};

const mapStateToProps = state => {
  return { products: state.products }
}

const mapDispatchToProps = dispatch => {
  return {
    setProducts: products => dispatch(setProducts(products))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
