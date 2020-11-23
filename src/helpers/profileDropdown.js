export function hideProfileDropdown(store) {
    localStorage.setItem('showProfileDropDown', 0);
    store.commit('auth/hideProfileDropDown')
}