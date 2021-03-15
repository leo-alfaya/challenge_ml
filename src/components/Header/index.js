import { Link } from "react-router-dom";
import Logo from "../Logo";
import SearchField from "../SearchField";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__link-logo">
          <Logo />
        </Link>
        <SearchField />
      </div>
    </header>
  );
};

export default Header;
