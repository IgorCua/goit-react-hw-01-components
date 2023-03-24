import styled from "@emotion/styled";
import friends from "./friends.json";

export const List = styled.ul`
    padding: 0;
    width: 350px;  
    display: flex;
    flex-direction: column;
`;

export const Item = styled.li`
    padding: 5px;
    width: 350px;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: row;

    background-color: #ffffff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    
    &:not(:last-child){
        margin-bottom: 15px;
    }
`;

export const Span = styled.span`
    width: 20px;
    height: 20px;
    margin-right: 10px;

    background-color: ${props => (props.isOnline) ? 'green' : 'red'};
    border-radius: 50%;
    
`;
export const Image = styled.img`
    margin-right: 20px;
    width: 90px;
    height: 90px;

    border: 1px solid rgb(201, 201, 201);
    border-radius: 15px;

    background-image: ${props => `url(${props.avatar})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export const Text = styled.p`
    font-weight: 700;
    font-size: 28px;
`;