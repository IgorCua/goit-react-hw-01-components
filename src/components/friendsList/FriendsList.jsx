import PropTypes from "prop-types";
import { List, Item, Span, Image, Text} from "./FriendsList.styled";
// import friends from "./friends.json";

export const FriendsList = ({data}) => {
    console.log(data);
    // console.log(props);
    return <List>
        {data.map(({avatar, name, isOnline, id}) => {
            return <Item key={id}>
                <Span isOnline={isOnline}></Span>
                <Image avatar={avatar}></Image>
                <Text>{name}</Text>
            </Item>
        })}
    </List>
}

FriendsList.propTypes = {
    data: PropTypes.object.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
}