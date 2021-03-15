import { useEffect } from "react";
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

export default connect(null, mapDispatchToProps)(Home);
