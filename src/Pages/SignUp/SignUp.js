import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');
  const [createdUserEmail, setCreatedUserEmail] = useState('');

  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate('/');
  }

  const updateName = (name) => {
    updateUserProfile(name)
      .then(() => {
        alert('user name updated');
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const handleSignUp = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        setSignUpError('');
        const user = result.user;
        console.log(user);
        updateName(data.name);
        toast.success('User Created');
        saveUser(data.name, data.email);
        // navigate('/');
      })
      .catch((error) => {
        console.error(error);
        console.log(error.message);
        toast.error(error.message);
        setSignUpError(error.message);
      })
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // getUserToken(email);
        setCreatedUserEmail(email);
      })
  };

  // const getUserToken = (email) => {
  //   fetch(`http://localhost:5000/jwt?email=${email}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data);
  //       if (data.accessToken) {
  //         localStorage.setItem('accessToken', data.accessToken);
  //         navigate('/');
  //       }
  //     })
  // };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-md">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Name</span></label>
            <input {...register('name', {
              required: "Name is required"
            })}
              type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
            {errors.name && <p className="text-red-500 font-semibold">{errors.name?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input {...register('email', {
              required: 'Email address is required'
            })}
              type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            {errors.email && <p className="text-red-500 font-semibold">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: "Password must be 6 characters or longer" },
              pattern: {
                value: /(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,})/,
                message: 'Password must be strong'
              }
            })}
              type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
            {errors.password && <p className="text-red-500 font-semibold">{errors.password?.message}</p>}
          </div>
          <input className="btn btn-accent w-full mt-4" value="Sign Up" type="submit" />
          {signUpError && <p className="mt-1 text-red-500 font-semibold">{signUpError}</p>}
        </form>
        <p className="text-center">Already have an account? <Link className="text-secondary font-bold underline decoration-secondary hover:decoration-2" to="/login">Please Login</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;