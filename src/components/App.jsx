import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import user from "./profile/user.json";
import data from "./statistics/data.json"
import {Profile} from "./profile/Profile";
import {Statistics} from "./statistics/Statistics"

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
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

      React homework template
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired
}