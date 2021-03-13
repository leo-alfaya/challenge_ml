import PropTypes from "prop-types";
import "./main-layout.scss";

const MainLayout = ({ children }) => {
  return <div className="page-wrapper">{children}</div>;
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
