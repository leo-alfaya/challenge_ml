import { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getItemDetail } from "../../api";
import { setActiveProduct, clearActiveProduct } from "../../redux/actions";
import MainLayout from "../../layout";
import Breadcrumb from "../../components/Breadcrumb";
import ProductDetail from "../../components/ProductDetail";
import Error from "../../components/Error";
import { useParams } from "react-router-dom";

const Detail = ({ activeProduct, setActiveProduct, clearActiveProduct }) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const fetchItemDetail = async function fetch() {
    setIsLoading(true);

    const response = await getItemDetail({ id });

    if (!response.error) {
      setActiveProduct(response.data);
    } else {
      console.log(response.message);
    }

    setIsLoading(false);
  };

  const renderContent = () => {
    if (Object.keys(activeProduct).length) {
      return <ProductDetail product={activeProduct} />;
    }
    return (
      <Error error="Se produjo un error al encontrar este producto, ¡intente buscar nuevamente" />
    );
  };

  useEffect(() => {
    fetchItemDetail();

    return () => clearActiveProduct();
  }, []);

  return (
    <MainLayout>
      {!isLoading ? (
        <>
          <Breadcrumb />
          {renderContent()}
        </>
      ) : null}
    </MainLayout>
  );
};

const mapStateToProps = (state) => {
  return { activeProduct: state.products.active };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveProduct: (product) => dispatch(setActiveProduct(product)),
    clearActiveProduct: () => dispatch(clearActiveProduct()),
  };
};

Detail.propTypes = {
  activeProduct: PropTypes.object.isRequired,
  clearActiveProduct: PropTypes.func.isRequired,
  setActiveProduct: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
