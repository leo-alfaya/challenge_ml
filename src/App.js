import { useEffect } from "react";
import { connect } from "react-redux";
import { setProducts } from "./redux/actions";
import { getProducts } from "./api";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";

const App = ({ query, setProducts }) => {
  // const fetch = async function initialFetch() {
  //   const [hasError, result] = await getProducts({ query });

  //   if (!hasError) {
  //     setProducts(result.results);
  //   } else {
  //     console.log("error => ", result);
  //   }
  // };

  // useEffect(() => fetch(), [query]);

  return (
    <Router>
      <Switch>
        <Route path="/items">
          <Results />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return { query: state.products.query };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => dispatch(setProducts(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
