import PropTypes from "prop-types";
import "./styles.scss";

const Error = ({ error }) => {
  return (
    <div className="error">
      <p className="error__text">{error}</p>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string.isRequired,
};

export default Error;
