import { formatCurrency } from "../../../helpers/format";
import Separator from "../../Separator";
import { Link } from "react-router-dom";

import "./styles.scss";

const ResultItem = ({ item }) => {
  return (
    <div className="result-item">
      <Link to={`/items/${item.id}`} className="result-item__link">
        <div className="result-item__thumbnail-wrapper">
          <img
            src={item.picture}
            alt={item.title}
            className="result-item__thumbnail-image"
          />
        </div>
        <div className="result-item__info-wrapper">
          <div className="result-item__info-header-wrapper">
            <p className="result-item__price">
              {formatCurrency(item.price.amount, item.price.currency)}
            </p>
            <p className="result-item__city">{item.city_name}</p>
          </div>
          <div className="result-item__title-wrapper">
            <p className="result-item__title">{item.title}</p>
          </div>
        </div>
      </Link>
      <Separator />
    </div>
  );
};

export default ResultItem;
