import React from 'react';
import profilePicture from '../assets/profile-pic.png';

const PatientCard = ({ profileImage,address, age, dob, name, regId, gender, email, mobile, clinicId }) => {
  return (
    <div className="bg-gray-300 rounded-md px-3 py-3 shadow-lg flex flex-col gap-2 ">
      <div className="flex items-center gap-3">
        <img className="rounded-full  object-cover w-12 h-12 " src={profilePicture} alt="" />
        <p className="text-sm">{name || 'new4'}</p>
      </div>
      <div className="flex items-center flex-col items-start text-xs  ">
        <div>
          <span>dob : </span>
          {dob || ' 1970-01-01'}
        </div>
        <div>
          <span>gender : </span>
          {gender || 'unknown'}
        </div>
        <div>
          <span>age : </span>
          {age || '30'}
        </div>
      </div>
      <div className="flex items-center flex-col items-start text-xs  ">
        <div>
          <span>regId : </span>
          {regId || 'PAT154'}
        </div>
        <div>
          <span>mobile : </span>
          {mobile || '111111'}
        </div>
      </div>
      <div className="flex items-center flex-col items-start text-xs  ">
        <div>
          <span>clinicId : </span>
          {clinicId || '1'}
        </div>
        <div>
          <span>mobile : </span>
          {mobile || '111111'}
        </div>
      </div>
      <div className="text-xs">
        <span>Address : </span>
        {mobile || 'Not given'}
      </div>
    </div>
  );
};

export default PatientCard;
