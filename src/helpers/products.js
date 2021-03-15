const prepareItem = ({
  id,
  title,
  price,
  currency_id,
  thumbnail,
  condition,
  shipping,
  address,
  sold_quantity,
  pictures
}) => ({
  id,
  title,
  city_name: address?.city_name,
  price: {
    currency: currency_id,
    amount: price,
  },
  picture: pictures ? pictures[0].secure_url : thumbnail,
  condition: condition,
  shipping: shipping.free_shipping,
  sold_quantity
})


export const prepareProducts = (products) => {
  const preparedProducts = products.results.slice(0, 4);
  const categories = products.filters[0]?.values.map(
    (category) => category.name
  );

  const items = preparedProducts.map(product => prepareItem(product));

  return { categories, items };
};

export const prepareActiveProductDetails = (product) => {
  const item = prepareItem(product);

  return { item };
};
