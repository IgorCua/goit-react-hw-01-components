import PropTypes, { object } from "prop-types";
import { List, Item, Span, Image, Text} from "./FriendsList.styled";
// import friends from "./friends.json";

export const FriendsList = ({data}) => {
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
    data: PropTypes.arrayOf(object).isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.string
}