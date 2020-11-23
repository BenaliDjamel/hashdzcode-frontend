const getUserFromLocalStorage = () => {

    const user = JSON.parse(localStorage.getItem('user'));

    return !user ? null : user;
}

export default getUserFromLocalStorage;

