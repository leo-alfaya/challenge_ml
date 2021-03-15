import "./styles.scss";
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

export default connect(mapStateToProps)(Breadcrumb);
