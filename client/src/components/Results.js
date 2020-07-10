import React from 'react';
import Extensions from './Extensions';
import ProfileData from './ProfileData/ProfileData';

const Results = ({ data }) => {
  let toggle = data.panel;

  return (
    <>{!toggle ? <ProfileData data={data} /> : <Extensions data={data} />}</>
  );
};

export default Results;
