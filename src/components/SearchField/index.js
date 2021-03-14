import { useState } from "react";
import { connect } from "react-redux";
import { setProductQuery } from "../../redux/actions";
import "./styles.scss";

const SearchField = ({ query, setProductQuery }) => {
  const [inputValue, setInputValue] = useState(query);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleSubmitSearch();
    }
  };

  const handleSubmitSearch = () => {
    setProductQuery(inputValue);
  };

  return (
    <div className="search-field">
      <input
        type="text"
        className="search-field__input"
        placeholder="Nunca dejes de buscar"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <button
        className="search-field__button"
        type="button"
        onClick={handleSubmitSearch}
      >
        <img src="icons/search.png" alt="search icon" />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { query: state.products.query };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProductQuery: (products) => dispatch(setProductQuery(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
