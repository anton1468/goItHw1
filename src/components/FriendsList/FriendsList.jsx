import React from 'react';
import {arrayOf, bool, number, shape, string} from "prop-types";
import {Avatar, Friend, List, Name, Online} from "./FriendsList.styles";

const FriendsList = ({friends}) => {
  return (
    <div>
      <List>
        {friends.map((friend) =>
          <Friend key={friend.id}>
            <Online online={friend.isOnline}/>
            <Avatar src={friend.avatar} alt="User avatar"/>
            <Name>{friend.name}</Name>
          </Friend>
        )}
      </List>
    </div>
  );
};

FriendsList.propTypes = {
  friends: arrayOf(shape({
    avatar: string,
    name: string,
    isOnline: bool,
    id: number
  }))

}

export default FriendsList;
