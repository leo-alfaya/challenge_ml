const prepareItems = (products) => {
  return products.map(
    ({ id, title, price, currency_id, thumbnail, condition, shipping }) => ({
      id,
      title,
      price: {
        currency: currency_id,
        amount: price,
      },
      picture: thumbnail,
      condition: condition,
      shipping: shipping.free_shipping,
    })
  );
};

export const prepareProducts = (products) => {
  const preparedProducts = products.results.slice(0, 4);
  const categories = products.filters[0].values.map(
    (category) => category.name
  );

  const items = prepareItems(preparedProducts);

  return { categories, items };
};

export default {};
