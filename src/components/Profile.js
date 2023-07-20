import React from 'react'
import './Profile.css'
import { useState } from 'react'
import UserProfile from './UserProfile'
import Login from './user/Login'

// import Spinner from '../Helper/Spinner'


const Profile = () => {
  const [user, setUser] = useState(null);

  const handleUpdatteSuccess=(updateduser)=>{
setUser(updateduser)
  }
  

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <div>
      {user ? <UserProfile user={user} onUpdateSuccess={handleUpdatteSuccess} /> : <Login onLogin={handleLogin} />}
    </div>
  );


  
    
}

export default Profile