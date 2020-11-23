import axios from 'axios';
import getUserFromLocalStorage from '../../helpers/localStorage';

const userFromLocalStorage = getUserFromLocalStorage();
const ProfileDropDownLocalStorage = localStorage.getItem('showProfileDropDown')


const state = {
    user: userFromLocalStorage ? userFromLocalStorage : {},
    isUserLoggedIn: !!userFromLocalStorage,
    showProfileDropDown: !!ProfileDropDownLocalStorage
}

const mutations = {

    setUser(state, data) {
        state.user = data;
        localStorage.setItem('user', JSON.stringify(state.user));
        state.isUserLoggedIn = true;
    },

    logout(state) {
        state.user = {};
        state.isUserLoggedIn = false;
        localStorage.removeItem('user');
    },
    toggleProfileDropDown(state) {
        state.showProfileDropDown = !state.showProfileDropDown
        localStorage.setItem('showProfileDropDown', Number(state.showProfileDropDown));
    },

    hideProfileDropDown(state) {
        state.showProfileDropDown = false
    }

}

const actions = {

    async login({ commit }, user) {
        await axios.get('/sanctum/csrf-cookie');
        const response = await axios.post('/api/login', user);
        commit('setUser', response.data);
    },

    async logout({ commit }) {
        await axios.post('/api/logout');
        commit('logout')
    },
    toggleProfileDropDown({ commit }) {
        commit('toggleProfileDropDown')
    }

}

const getters = {

    isUserLoggedIn(state) {
        return state.isUserLoggedIn;
    },

    user(state) {
        return state.user;
    },

    showProfileDropDown(state) {
        return state.showProfileDropDown
    }

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}