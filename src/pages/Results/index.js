import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProducts } from "../../api";
import { setProducts, setProductQuery } from "../../redux/actions";
import MainLayout from "../../layout";
import "./styles.scss";

const Results = ({ setProducts, setProductQuery }) => {
  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search");

  const fetchProducts = async function initialFetch() {
    const [hasError, result] = await getProducts({ query: search });

    if (!hasError) {
      setProducts(result);
    }
  };

  useEffect(() => {
    setProductQuery(search);
    fetchProducts();
  }, [search]);

  return (
    <MainLayout>
      <p>Results Page: {search}</p>
    </MainLayout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => dispatch(setProducts(products)),
    setProductQuery: (products) => dispatch(setProductQuery(products)),
  };
};

export default connect(null, mapDispatchToProps)(Results);
