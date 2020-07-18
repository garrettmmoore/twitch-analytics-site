import React from 'react';
import Extensions from '../Extensions/Extensions';
import ProfileData from '../ProfileData/ProfileData';

const Results = ({ data }) => {
  if (data.length > 0) data = JSON.parse(data);

  let toggle = data.panel;

  return (
    <>{!toggle ? <ProfileData data={data} /> : <Extensions data={data} />}</>
  );
};

export default Results;
