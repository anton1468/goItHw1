import React from 'react';
import {number, shape, string} from 'prop-types';
import {
  AvatarImage,
  MainContainer,
  Name,
  UserInfo,
  UserInfoContainer,
  UserStats,
  UserStatsItem
} from "./Profile.styles";

const Profile = ({ username, avatar, tag, location, stats }) => {
  const { likes, followers, views } = stats
  return (
    <MainContainer>
      <UserInfoContainer>
        <AvatarImage src={avatar} alt='User avatar'/>
        <Name>{username}</Name>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserInfoContainer>
      <UserStats>
        <UserStatsItem>
          <p>Followers</p>
          <p>{followers}</p>
        </UserStatsItem>
        <UserStatsItem>
          <p>Views</p>
          <p>{views}</p>
        </UserStatsItem>
        <UserStatsItem>
          <p>Likes</p>
          <p>{likes}</p>
        </UserStatsItem>
      </UserStats>
    </MainContainer>
  );
};
export default Profile;

Profile.propTypes = {
  profile: shape({
    username: string.isRequired,
    tag: string.isRequired,
    location: string.isRequired,
    avatar: string.isRequired,
    stats: shape({
      followers: number.isRequired,
      views: number.isRequired,
      likes: number.isRequired
    })
  }),
}
