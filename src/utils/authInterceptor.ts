import { store } from '@/redux/store';
import { logout } from '@/redux/slices/auth-slice';
import Axios from '@/api';
import { AUTH_TOKEN } from '@/constants';

/**
 * Setup Axios interceptors for automatic authentication handling
 */
export const setupAuthInterceptors = () => {
  // Request interceptor to add auth token
  Axios.interceptors.request.use(
    (config) => {
      const token = store.getState().auth.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor to handle 401 errors
  Axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Handle 401 Unauthorized responses
      if (error.response?.status === 401) {
        console.warn('Unauthorized access detected, clearing authentication');
        
        // Clear Redux state
        store.dispatch(logout());
        
        // Clear localStorage
        localStorage.removeItem(AUTH_TOKEN);
        
        // Redirect to login page (only if not already on login page)
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }
      
      return Promise.reject(error);
    }
  );
};

/**
 * Remove all interceptors (useful for cleanup)
 */
export const clearAuthInterceptors = () => {
  Axios.interceptors.request.clear();
  Axios.interceptors.response.clear();
};
