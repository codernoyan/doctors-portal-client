import React, { useContext } from 'react';
// import { Watch } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-4">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-secondary"></div>
      </div>
    )
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;