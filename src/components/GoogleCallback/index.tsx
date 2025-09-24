import { useEffect } from 'react';
import { useAuth } from '@/redux/hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import Axios from '@/api';
import toast from 'react-hot-toast';

function GoogleCallback() {
  const { login, updateAuthData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleGoogleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const authStatus = urlParams.get('auth');
      const userData = urlParams.get('data');

      if (authStatus === 'success' && userData) {
        try {
          const decodedData = JSON.parse(decodeURIComponent(userData));
          
          // Update auth state
          login(true);
          updateAuthData({
            token: decodedData.accessToken,
            role: decodedData.user.role,
            user: decodedData.user,
          });

          // Store in localStorage for persistence
          localStorage.setItem('auth_token', decodedData.accessToken);
          localStorage.setItem('auth_role', decodedData.user.role);
          localStorage.setItem('auth_user', JSON.stringify(decodedData.user));
          localStorage.setItem('auth_is_authenticated', 'true');

          toast.success('Login successful!');
          
          // Redirect to dashboard
          navigate('/dashboard');
        } catch (error) {
          console.error('Error parsing user data:', error);
          toast.error('Login failed. Please try again.');
          navigate('/login');
        }
      } else if (authStatus === 'failure') {
        toast.error('Login failed. Please try again.');
        navigate('/login');
      } else {
        // Check if we have a session cookie from the backend
        try {
          // Make a request to check if user is authenticated
          const response = await Axios.get('/auth/me');
          
          if (response.data && response.data.user) {
            // User is authenticated, update state
            login(true);
            updateAuthData({
              token: response.data.accessToken || '',
              role: response.data.user.role,
              user: response.data.user,
            });

            // Store in localStorage for persistence
            localStorage.setItem('auth_token', response.data.accessToken || '');
            localStorage.setItem('auth_role', response.data.user.role);
            localStorage.setItem('auth_user', JSON.stringify(response.data.user));
            localStorage.setItem('auth_is_authenticated', 'true');

            toast.success('Login successful!');
            navigate('/dashboard');
          } else {
            navigate('/login');
          }
        } catch (error) {
          console.error('Error checking authentication status:', error);
          navigate('/login');
        }
      }
    };

    handleGoogleCallback();
  }, [login, updateAuthData, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      <p className="mt-4 text-lg">Processing your login...</p>
    </div>
  );
}

export default GoogleCallback;
