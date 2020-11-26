import axios from 'axios'

  export function interceptRequest() {
    axios.interceptors.response.use(undefined, function (error) {

        if (error.response.status === 401) {
            store.commit('auth/logout');
            localStorage.removeItem('user');
            router.push('/login');
        }
        return Promise.reject(error);
    });
  }