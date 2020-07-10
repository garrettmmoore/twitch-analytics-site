import React from 'react';
import './styles.css';

const ProfileData = ({ data }) => {
  const results = data || [];
  const { profile_image_url, display_name, view_count } = results;

  return (
    <div className="container">
      <img className="profile-img" src={profile_image_url} />
      <div>
        <div className="display-name">{display_name}</div>
        <div className="view-count">{view_count}</div>
      </div>
    </div>
  );
};

export default ProfileData;
