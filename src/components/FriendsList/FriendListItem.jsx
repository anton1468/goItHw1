import React from 'react';
import {Avatar, Friend, Name, Online} from "./FriendsList.styles";
import { bool, number, string} from "prop-types";


const FriendListItem = ({isOnline, avatar, name}) => {
  return (
    <Friend>
      <Online online={isOnline}/>
      <Avatar src={avatar} alt="User avatar"/>
      <Name>{name}</Name>
    </Friend>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: string,
    name: string,
    isOnline: bool,
    id: number
}
