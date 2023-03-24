import user from "./profile/user.json";
import data from "./statistics/data.json";
import friends from "./friendsList/friends.json";
import transactions from "./transactionHistory/transactions.json";
import { Profile } from "./profile/Profile";
import { Statistics } from "./statistics/Statistics";
import { FriendsList } from "./friendsList/FriendsList.jsx";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(245, 245, 245)'
      }}
    >

      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title={"Hello I'm Title"}
        stats={data}
      />

      <FriendsList 
        data={friends}
      />

      <TransactionHistory 
        items={transactions}
      />
    </div>
  );
};
