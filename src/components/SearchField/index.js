import { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { setProductQuery } from "../../redux/actions";
import "./styles.scss";

const SearchField = ({ query, setProductQuery }) => {
  let history = useHistory();
  const [search, setSearch] = useState(query);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleSubmitSearch();
    }
  };

  const handleSubmitSearch = () => {
    const urlParams = new URLSearchParams({ search }).toString();

    setProductQuery(search);
    
    history.push(`/items?${urlParams}`);
  };

  return (
    <div className="search-field">
      <input
        type="text"
        className="search-field__input"
        placeholder="Nunca dejes de buscar"
        value={search}
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
