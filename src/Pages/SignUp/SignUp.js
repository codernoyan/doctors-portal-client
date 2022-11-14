import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-md">
        <h2 className="text-xl">Sign Up</h2>
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
              minLength: {value: 6, message: "Password must be 6 characters or longer"}
            })}
              type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
            {errors.password && <p className="text-red-500 font-semibold">{errors.password?.message}</p>}
          </div>
          <input className="btn btn-accent w-full mt-4" value="Sign Up" type="submit" />
        </form>
        <p className="text-center">Already have an account? <Link className="text-secondary font-bold underline decoration-secondary" to="/login">Please Login</Link></p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;