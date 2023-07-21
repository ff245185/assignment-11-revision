import React, { useContext } from 'react';
import { AuthContext } from '../Contaxt/Authprovider';
import { useNavigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>; // You can show a loading spinner here
  }

  if (user?.email) {
    return children;
  }

  return navigate('/login', { state: { from: location }, replace: true });
};

export default PrivateRoute;
