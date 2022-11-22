import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const imgHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();
  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ['appointmentSpecialty'],
    queryFn: async () => {
      try {
        const res = await fetch('http://localhost:5000/appointmentSpecialty');
        const data = await res.json();
        return data;

      } catch (error) {
        console.log(error);
      }
    }
  })

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);

    // upload image to imgbb
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgData => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url
          };

          // save doctor info to database
          fetch('http://localhost:5000/doctors', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor)
          })
          .then(res => res.json())
            .then(data => {
              console.log(data);
              toast.success(`${data.name} is added successfully`);
              navigate('/dashboard/managedoctors');
          })
        }
      })
  };

  if (isLoading) {
    return <Loading></Loading>
  }

  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
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
          <label className="label"><span className="label-text">Specialty</span></label>
          <select
            {...register('specialty')}
            className="select select-bordered w-full max-w-xs">
            <option disabled defaultValue={"Please select a specialty"}>Please select a specialty</option>
            {
              specialties.map(specialty => <option
                key={specialty._id}
                value={specialty.name}
              >{specialty.name}</option>)
            }

          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label"><span className="label-text">Photo</span></label>
          <input {...register('image', {
            required: "Photo is required"
          })}
            type="file" placeholder="Name" className="input input-bordered w-full max-w-xs" />
          {errors.img && <p className="text-red-500 font-semibold">{errors.img?.message}</p>}
        </div>
        <input className="btn btn-accent w-full mt-4" value="Add Doctor" type="submit" />
        {/* {signUpError && <p className="mt-1 text-red-500 font-semibold">{signUpError}</p>} */}
      </form>
    </div>
  );
};

export default AddDoctor;