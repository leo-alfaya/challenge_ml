import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const SearchField = ({ query }) => {
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
    history.push(`/items?${urlParams}`);
  };

  useEffect(() => {
    setSearch(query)
  }, [query])

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
        <img src="/icons/search.png" alt="search icon" />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { query: state.products.query };
};

export default connect(mapStateToProps)(SearchField);
