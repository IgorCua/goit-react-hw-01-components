import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import user from "./user.json";
import {App} from "../App";
import style from "./Profile.module.css"

export const Profile = (props) => {
    const {username,
              tag, 
              location,
              avatar, 
              stats: {followers, views, likes}
          } = props;
    
    console.log('profile props: ', username, tag, location, avatar)
    console.log('profile stats: ', followers, views, likes)

    return(
        <div className={style.profile}> 
            <div className={style.description}>
                <img src={avatar} alt="User avatar" className={style.avatar}/>
                <p className={style.name}> {username}</p>
                <p className={style.tag}>@{tag}</p>
                <p className={style.location}> {location}</p>
            </div>

            <ul className={style.stats}>
                <li>
                    <span className={style.label}>Followers</span>
                    <span className={style.quantity}>{followers}</span>
                </li>
                <li>
                    <span className={style.label}>Views</span>
                    <span className={style.quantity}>{views}</span>
                </li>
                <li>
                    <span className={style.label}>Likes</span>
                    <span className={style.quantity}>{likes}</span>
                </li>
            </ul>
        </div>
    );
}

// ReactDOM.createRoot(document.getElementById('root')).render(<Profile
//     username={user.username}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stat={user.stat}
// />);

// Profile.propTypes = {
//     username: PropTypes.string,
//     tag: PropTypes.string,
//     location: PropTypes.string,
//     avatar: PropTypes.string,
//     stats: PropTypes.number
//   }