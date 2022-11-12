import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  useEffect(() => {
    fetch('appointmentOptions.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setAppointmentOptions(data);
      })
  }, [])
  return (
    <section className="mt-16">
      <p className="text-center text-xl font-bold text-secondary">Available Appointment on {format(selectedDate, 'PP')}</p>
      <div>
        {
          appointmentOptions.map(option => <AppointmentOption
            key={option._id}
            option={option}
          ></AppointmentOption>)
        }
      </div>
    </section>
  );
};

export default AvailableAppointments;