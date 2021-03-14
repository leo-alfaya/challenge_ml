import "./styles.scss";
import Logo from "../Logo";
import SearchField from "../SearchField"

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <SearchField />
      </div>
    </header>
  );
};

export default Header;
