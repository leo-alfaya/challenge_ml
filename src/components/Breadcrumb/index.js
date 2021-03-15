import "./styles.scss";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Breadcrumb = ({ categories }) => {
  return (
    <div className="breadcrumb">
      <p className="breadcrumb__text">{categories ? categories.join(" > ") : ""}</p>
    </div>
  );
};


const mapStateToProps = (state) => {
  return { categories: state.products.list.categories };
};

Breadcrumb.propTypes = {
  categories: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Breadcrumb);
