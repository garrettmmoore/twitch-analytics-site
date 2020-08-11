import React from 'react';

import ExtensionsData from '../data/ExtensionsData';
import ProfileData from '../data/ProfileData';

const ProfileResults = ({ data }) => {
  if (data.length > 0) data = JSON.parse(data);

  let toggle = data.panel;

  return (
    <>
      {!toggle ? <ProfileData data={data} /> : <ExtensionsData data={data} />}
    </>
  );
};

export default ProfileResults;
