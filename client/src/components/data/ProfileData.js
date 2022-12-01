import { HStack, VStack, WrapItem } from '@chakra-ui/react';

const ProfileData = ({ data }) => {
  const results = data || [];
  const { id, description, profile_image_url, display_name, view_count } =
    results;

  return (
    <VStack
      className="profile-container"
      alignItems="baseline"
      justifyContent="space-evenly"
    >
      <HStack alignItems="center" justifyContent="space-evenly">
        <img className="profile-img" src={profile_image_url} alt="profile" />
        <div className="display-name">{display_name}</div>
      </HStack>
      <HStack alignItems="baseline" justifyContent="space-evenly">
        <div className="profile-id" style={{ fontWeight: 'bold' }}>
          {`User ID: ${id}`}
        </div>
        <div className="view-count" style={{ fontWeight: 'bold' }}>
          {`Views: ${view_count}`}
        </div>
      </HStack>
      <WrapItem>
        <div className="profile-description" style={{ fontWeight: 'bold' }}>
          {`Description: ${description}`}
        </div>
      </WrapItem>
    </VStack>
  );
};

export default ProfileData;
