import React from 'react';
import {arrayOf, bool, number, shape, string} from "prop-types";
import {List} from "./FriendsList.styles";
import FriendListItem from "./FriendListItem";

const FriendsList = ({friends}) => {
  return (
    <div>
      <List>
        {friends.map(({id, isOnline, avatar, name}) =>
          <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
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
