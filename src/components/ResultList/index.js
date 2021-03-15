import PropTypes from "prop-types";
import ResultItem from "./ResultItem";
import "./styles.scss";

const ResultList = ({ products }) => {
  return (
    <div className="result-list">
      {products
        ? products.map((item) => {
            return <ResultItem item={item} key={item.id} />;
          })
        : null}
    </div>
  );
};

ResultList.propTypes = {
  products: PropTypes.array.isRequired
}

export default ResultList;
