import PropTypes, { object } from "prop-types";
// import transactions from "./transactions.json";
import {Table, Thead, Th, Tbody, Tr, Td} from "./TransactionHistory.styled"

export const TransactionHistory = ({items}) => {
    return <Table>
        <Thead>
            <Tr>
                <Th>Type</Th>
                <Th>Amount</Th>
                <Th>Currency</Th>
            </Tr>
        </Thead>

        <Tbody>
            {items.map(({id, type, amount, currency}) => {
                return <Tr key={id}>
                    <Td>{type}</Td>
                    <Td>{amount}</Td>
                    <Td>{currency}</Td>
                </Tr>
            })}
        </Tbody>
    </Table>
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(object).isRequired,
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}