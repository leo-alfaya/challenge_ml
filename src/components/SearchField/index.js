import "./styles.scss";

const SearchField = () => {
  return (
    <div className="search-field">
      <input type="text" className="search-field__input" placeholder="Nunca dejes de buscar"/>
      <button className="search-field__button">
        <img src="icons/search.png" alt="search icon" />
      </button>
    </div>
  );
};

export default SearchField;
