import { setToken, getToken } from '@/utils/localstlroage.js';
import { getlogin } from '@/api/login.js';

const getDefaultState = () => {
  return {
    token: getToken('token') || '',
    username: getToken('username') || '',
    password: getToken('password') || '',

    id: 0
  };
};
const state = getDefaultState();

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
    console.log(state.token, '147258')
  },
  SET_USERNAME: (state, username) => {
    state.username = username;
  },
  SET_ID: (state, id) => {
    state.id = id;
  }
};

const actions = {
  login({ commit }, userinfo, iconshow) {

    if (iconshow) {
      setToken('username', userinfo.username);
      setToken('password', userinfo.password);
      console.log();
    } else {
      setToken('username', '');
      setToken('password', '');
    }
    return new Promise((resolve, reject) => {
      getlogin(userinfo).then(response => {
        const data = response;
        console.log(data);
        commit('SET_TOKEN', data.data.token);
        /*  commit('SET_TOKEN', data.data.userInfo); */
        commit('SET_ID', data.data.userInfo.id);
        setToken('token', data.data.token);


        resolve();
      });
    });
  },
  register({ commit }) {
    commit('SET_TOKEN', '');

  }
};
export default {
  namespaced: true,
  state,
  mutations,
  actions
};
