import Profile from "./Profile/Profile";
import profile from '../data/user.json'
import stats from '../data/data.json'
import friends from '../data/friends.json'
import transactions from "../data/transactions.json"
import Statistics from "./Statistics/Statistics";
import FriendsList from "./FriendsList/FriendsList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export const App = () => {

  //! show title or not
  const isShowTitle = !Math.round(Math.random()) ? 'Upload stats' : undefined;

  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <Profile
        username={profile.username}
        avatar={profile.avatar}
        tag={profile.tag}
        location={profile.location}
        stats={profile.stats}
      />
      <Statistics title={isShowTitle} stats={stats}/>
      <FriendsList friends={friends}/>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
