import PropTypes from "prop-types";
import "./styles.scss";

const Button = ({ text, type }) => {
  return <button className="button" type={type}>{text}</button>;
};


Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: "submit"
}

export default Button;
