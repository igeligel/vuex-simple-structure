const MESSAGES_UPDATED = (state, messages) => {
  state.messages = messages;
};

const PRODUCTS_UPDATED = (state, products) => {
  state.products = products;
};

export default {
  MESSAGES_UPDATED,
  PRODUCTS_UPDATED,
};
