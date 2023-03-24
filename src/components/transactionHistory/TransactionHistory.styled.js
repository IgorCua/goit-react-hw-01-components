import styled from "@emotion/styled";

export const Table = styled.table`
    width: 500px; 

    font-size: 22px;

    border-collapse: collapse;
    border: 1px solid grey;
`;

export const Thead = styled.thead`

`;

export const Th = styled.th`
    height: 50px;

    fons-size: 22px;
    font-weight: 600;

    color: white;
    background-color: rgb(32, 178, 207);
    border: 1px solid grey;
`;

export const Tbody = styled.tbody`
 text-align: center;
    border: 1px solid grey;

`;

export const Tr = styled.tr`
    

    &:nth-child(even) {
        background-color: lightgrey;
    }
`;

export const Td = styled.td`
    height: 50px;
    border: 1px solid grey;
`;