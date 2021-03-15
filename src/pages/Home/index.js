import { useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setProductQuery } from "../../redux/actions";
import MainLayout from "../../layout";

const Home = ({ setProductQuery }) => {
  useEffect(() => {
    setProductQuery("");
  }, []);

  return <MainLayout />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProductQuery: (query) => dispatch(setProductQuery(query)),
  };
};

Home.propTypes = {
  setProductQuery: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Home);
