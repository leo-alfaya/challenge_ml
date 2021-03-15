import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProductDetail, getProductDescription } from "../../api";
import { setActiveProductDetail, setActiveProductDescription } from "../../redux/actions";
import MainLayout from "../../layout";
import Breadcrumb from "../../components/Breadcrumb";
import ProductDetail from "../../components/ProductDetail";
import { useParams } from "react-router-dom";

const Detail = ({ setActiveProductDetail, setActiveProductDescription, activeProduct }) => {
  const { id } = useParams();

  const fetchProductDetail = async function fetch() {
    const [hasError, result] = await getProductDetail({ id });

    if (!hasError) {
      setActiveProductDetail(result)
    }
  };

  const fetchProductDescription = async function fetch() {
    const [hasError, result] = await getProductDescription({ id });

    if (!hasError) {
      setActiveProductDescription(result.plain_text);
    }
  };
  

  useEffect(() => {
    fetchProductDetail();
    fetchProductDescription()
  }, []);

  return (
    <MainLayout>
      <Breadcrumb />
      <ProductDetail product={activeProduct}/>
    </MainLayout>
  );
};


const mapStateToProps = (state) => {
  return { activeProduct: state.products.active };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveProductDetail: (product) => dispatch(setActiveProductDetail(product)),
    setActiveProductDescription: (description) => dispatch(setActiveProductDescription(description))
  };
};

Detail.propTypes = {
  activeProduct: PropTypes.object.isRequired,
  setActiveProductDetail: PropTypes.func.isRequired,
  setActiveProductDescription: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

