import { fetchMessages } from '@/api';

const defaultState = {
  messages: [],
};

const actions = {
  getMessages: (context) => {
    fetchMessages
      .then((response) => {
        context.commit('MESSAGES_UPDATED', response);
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.error(error);
      });
  },
};

const mutations = {
  MESSAGES_UPDATED: (state, messages) => {
    state.messages = messages;
  },
};

const getters = {
  messages: state => state.messages,
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
