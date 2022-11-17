import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { loginUser } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');

  const handleLogin = (data) => {
    console.log(data);
    setLoginError('');
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Login Successful');
        navigate(from, { replace: true});
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setLoginError(error.message);
      })
  }

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-md">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input
              type="email" {...register("email", {
                required: "Email Address is required"
              })}
              placeholder="Email" className="input input-bordered w-full max-w-xs" />
            {errors.email && <p className="text-red-500 font-semibold mt-1">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input
              type="password" {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
              })}
              placeholder="Password" className="input input-bordered w-full max-w-xs" />
            <label className="label"><span className="label-text">Forget Password?</span></label>
            {errors.password && <p className="text-red-500 font-semibold">{errors.password?.message}</p>}
          </div>
          <input className="btn btn-accent w-full" value="Login" type="submit" />
          <div>
            {loginError && <p className="my-2 text-red-500 font-semibold">{loginError}</p>}
          </div>
        </form>
        <p className="text-center">New to Doctors Portal? <Link className="text-secondary font-bold underline decoration-secondary hover:decoration-2" to="/signup">Create new account</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;