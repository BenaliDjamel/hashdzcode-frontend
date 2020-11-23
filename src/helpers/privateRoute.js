
import { hideProfileDropdown } from './profileDropdown'
import { interceptRequest } from './interceptRequest'

export function initializeRouter(store, router) {
    router.beforeEach((to, from, next) => {
        hideProfileDropdown(store)
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const isUserAuthenticated = store.state.auth.isUserLoggedIn && store.state.auth.user;

        requiresUserToLogin(requiresAuth, isUserAuthenticated, next);
        redirectAuthenticatedUser(isUserAuthenticated,next,  to);
        next();
    });
    // redirect user to login if Unauthorized (token expires)  
    interceptRequest()
}

function requiresUserToLogin(requiresAuth, isUserAuthenticated, next) {
    if (requiresAuth && !isUserAuthenticated) {
        next('/login');
        return;
    }
}

function redirectAuthenticatedUser(isUserAuthenticated, next,  to) {
    if ((to.path === '/login' || to.path === '/signup') && isUserAuthenticated) {
        next('/feed');
        return;
    }
}