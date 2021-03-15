import { formatCurrency } from "../../helpers/format";
import PropTypes from 'prop-types';
import Button from "../../components/Button";
import "./styles.scss";

const ProductDetail = ({ product }) => {
  const { item, description } = product

  return (
    <div className="product-detail">
      {item ? (
        <div className="product-detail__detail-wrapper">
          <div className="product-detail__thumbnail-wrapper">
            <img
              src={item.picture}
              alt={item.title}
              className="product-detail__thumbnail-image"
            />
          </div>
          <div className="product-detail__info-wrapper">
            <p className="product-detail__condition">{`${item.condition} - ${item.sold_quantity} vendidos`}</p>
            <p className="product-detail__title">{item.title}</p>
            <p className="product-detail__price">
              {formatCurrency(item.price.amount, item.price.currency)}
            </p>
            <Button text="Comprar"/>
          </div>
        </div>
      ) : null}
      {description ? (
        <div className="product-detail__description-wrapper">
          <p className="product-detail__description-title">Descripción del producto</p>
          <p className="product-detail__description-text">{description}</p>
        </div>
      ) : null}
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductDetail;
