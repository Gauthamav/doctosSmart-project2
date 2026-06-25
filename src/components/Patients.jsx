import React, { useState, useEffect } from 'react';
import { PASSWORD, USERNAME } from '../utils/Constants';
import PatientCard from './PatientCard';
import Shimmer from './Shimmer';
const Patients = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api/patients?user_id=1&clinic_id=1&page_no=0', {
      headers: {
        Authorization: `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`,
      },
    });

    const data = await response.json();
    setUsers(data.result);
  };
  console.log(users);
  if (users.length === 0) return <Shimmer/>;
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 mt-5 gap-5 max-w-full w-[95%] mx-auto">
      {users.map(item => (
        <PatientCard
          key={item.id}
          clinicId={item.clinic_id}
          age={item.age}
          address={item.address}
          dob={item.date_of_birth}
          name={item.patient_name}
          profileImage={item.profile_picture}
          regId={item.registration_id}
          gender={item.gender}
          email={item.email}
          mobile={item.mobile_no}
          props={item}></PatientCard>
      ))}
    </div>
  );
};

export default Patients;
