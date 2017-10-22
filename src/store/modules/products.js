import { fetchProducts } from '@/api';

const defaultState = {
  products: [],
};

const actions = {
  getProducts: (context) => {
    fetchProducts
      .then((response) => {
        context.commit('PRODUCTS_UPDATED', response);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  },
};

const mutations = {
  PRODUCTS_UPDATED: (state, products) => {
    state.products = products;
  },
};

const getters = {
  products: state => state.products,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
