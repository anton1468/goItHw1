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

const Profile = ({profile}) => {
  const {username, avatar, tag, location, stats} = profile
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
          <p>{stats.followers}</p>
        </UserStatsItem>
        <UserStatsItem>
          <p>Views</p>
          <p>{stats.views}</p>
        </UserStatsItem>
        <UserStatsItem>
          <p>Likes</p>
          <p>{stats.likes}</p>
        </UserStatsItem>
      </UserStats>
    </MainContainer>
  );
};
export default Profile;

Profile.propTypes = {
  profile: shape({
    username: string,
    tag: string,
    location: string,
    avatar: string,
    stats: shape({
      followers: number,
      views: number,
      likes: number
    })
  }),
}
