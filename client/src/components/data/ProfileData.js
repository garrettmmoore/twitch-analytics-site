import { Flex } from '@chakra-ui/core';

const ProfileData = ({ data }) => {
  const results = data || [];
  const { profile_image_url, display_name, view_count } = results;

  return (
    <Flex
      className="container"
      alignItems="baseline"
      justifyContent="space-evenly"
    >
      <img className="profile-img" src={profile_image_url} alt="" />

      <div className="display-name">{display_name}</div>
      <div
        className="view-count"
        style={{ fontWeight: 'bold' }}
      >{`Views: ${view_count}`}</div>
    </Flex>
  );
};

export default ProfileData;
