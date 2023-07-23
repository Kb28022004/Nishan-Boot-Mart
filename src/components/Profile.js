import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import Cookies from 'js-cookie';
import axios from 'axios';
import Login from '../components/user/Login'
const ProfilePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Check if the user is already logged in using the token stored in the cookie
    const token = Cookies.get('auth');

    if (token) {
      // Fetch user profile data using the token
      fetchUserProfile(token);
    }
  }, []);

  const handleLogin = (userData) => {
    setData(userData);
  };

  const fetchUserProfile = async (token) => {
    try {
      // Fetch user profile data using the token
      const response = await axios.get('/api/user/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Pass the user data to the parent component
      handleLogin(response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  return (
    <div>
      {data ? <UserProfile data={data} /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default ProfilePage;
