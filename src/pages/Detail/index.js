import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItemDetail } from "../../api";
import {
  setActiveProduct,
} from "../../redux/actions";
import MainLayout from "../../layout";
import Breadcrumb from "../../components/Breadcrumb";
import ProductDetail from "../../components/ProductDetail";
import { useParams } from "react-router-dom";

const Detail = ({
  setActiveProduct,
  activeProduct,
}) => {
  const { id } = useParams();

  const fetchItemDetail = async function fetch() {
    const response = await getItemDetail({ id });

    if (!response.error) {
      setActiveProduct(response.data);
    } else {
      console.log(response.message)
    }
  };

  useEffect(() => {
    fetchItemDetail();
  }, []);

  return (
    <MainLayout>
      <Breadcrumb />
      <ProductDetail product={activeProduct} />
    </MainLayout>
  );
};

const mapStateToProps = (state) => {
  return { activeProduct: state.products.active };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveProduct: (product) =>
      dispatch(setActiveProduct(product)),
  };
};

Detail.propTypes = {
  activeProduct: PropTypes.object.isRequired,
  setActiveProduct: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
