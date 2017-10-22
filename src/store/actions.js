import { fetchMessages, fetchProducts } from '../api';

const getMessages = (context) => {
  fetchMessages
    .then((response) => {
      context.commit('MESSAGES_UPDATED', response);
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    });
};

const getProducts = (context) => {
  fetchProducts
    .then((response) => {
      context.commit('PRODUCTS_UPDATED', response);
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    });
};

export default {
  getMessages,
  getProducts,
};
