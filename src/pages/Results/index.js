import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getItems } from "../../api";
import {
  setProducts,
  setProductQuery,
  clearProducts,
} from "../../redux/actions";
import MainLayout from "../../layout";
import Breadcrumb from "../../components/Breadcrumb";
import ResultList from "../../components/ResultList";

const Results = ({ products, setProducts, setProductQuery, clearProducts }) => {
  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search");

  const fetchProducts = async function fetch() {
    const response = await getItems({ query: search });

    if (!response.error) {
      setProducts(response.data);
    } else {
      console.log(response.message);
    }
  };

  useEffect(() => {
    setProductQuery(search);
    fetchProducts();
  }, [search]);

  useEffect(() => {
    return () => clearProducts();
  }, []);

  return (
    <MainLayout>
      <Breadcrumb />
      <ResultList products={products} />
    </MainLayout>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products.list.items };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => dispatch(setProducts(products)),
    setProductQuery: (query) => dispatch(setProductQuery(query)),
    clearProducts: () => dispatch(clearProducts()),
  };
};

Results.propTypes = {
  clearProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  setProducts: PropTypes.func.isRequired,
  setProductQuery: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Results);
