import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('Sign Out Successful');
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      })
  };

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <h4 className="text-3xl">Please <button onClick={handleLogOut}>Sign Out</button></h4>
    </div>
  );
};

export default DisplayError;