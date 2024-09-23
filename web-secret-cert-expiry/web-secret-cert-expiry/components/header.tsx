import React from 'react';
import { useAuth } from './authContext';

const Header: React.FC = () => {
  const { isAuth, login, logout } = useAuth();
    return (
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl  mx-20 ">Azure Application Secret/Certificates Expiry Dashboard</h1>
      {isAuth ? (
          <button onClick={logout} className="bg-white text-blue-600 p-2 rounded">
              Logout
          </button>
      ) : (
          <button onClick={login} className="bg-white text-blue-600 p-2 rounded">
              Login
          </button>
      )}
  </header>
    );
  };

export default Header;