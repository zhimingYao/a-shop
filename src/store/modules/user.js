import { setToken, getToken } from '@/utils/localstlroage.js';
import { getlogin } from '@/api/login.js';

const getDefaultState = () => {
  return {
    token: getToken(),
    username: '',
    id: 0
  };
};
const state = getDefaultState();

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USERNAME: (state, username) => {
    state.username = username;
  },
  SET_ID: (state, id) => {
    state.id = id;
  }
};

const actions = {
  login({ commit }, userinfo) {
    return new Promise((resolve, reject) => {
      getlogin(userinfo).then(response => {
        const data = response;
        console.log(data);
        commit('SET_TOKEN', data.data.token);
        commit('SET_TOKEN', data.data.userInfo);
        commit('SET_ID', data.data.userInf.id);
        setToken('token', data.data.token);
        resolve();
      });
    });
  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
