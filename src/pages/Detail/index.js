import { useEffect } from "react";
import { connect } from "react-redux";
import { getProductDetail, getProductDescription } from "../../api";
import { setActiveProductDetail, setActiveProductDescription } from "../../redux/actions";
import MainLayout from "../../layout";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams } from "react-router-dom";

const Detail = ({ setActiveProductDetail, setActiveProductDescription }) => {
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
      <p>detail page</p>
    </MainLayout>
  );
};


// const mapStateToProps = (state) => {
//   return { products: state.products.list.items };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveProductDetail: (product) => dispatch(setActiveProductDetail(product)),
    setActiveProductDescription: (description) => dispatch(setActiveProductDescription(description))
  };
};

export default connect(null, mapDispatchToProps)(Detail);

