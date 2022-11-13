import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-md">
        <h2 className="text-xl">Login</h2>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input type="text" {...register("email")} placeholder="Email" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Password</span></label>
            <input type="password" {...register("password")} placeholder="Password" className="input input-bordered w-full max-w-xs" />
            <label className="label"><span className="label-text">Forget Password?</span></label>
          </div>
          <input className="btn btn-accent w-full" value="Login" type="submit" />
        </form>
        <p className="text-center">New to Doctors Portal? <Link className="text-secondary font-bold" to="/signup">Create new account</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;