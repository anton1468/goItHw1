import React from 'react';
import {
  TransactionTable,
  TransactionTd,
  TransactionTh,
} from "./TransactionHistory.styles";
import {arrayOf, shape, string} from "prop-types";

const TransactionHistory = ({transactions}) => {
  return (
    <div>
      <TransactionTable>
        <thead>
          <tr>
            <TransactionTh>Type</TransactionTh>
            <TransactionTh>Amount</TransactionTh>
            <TransactionTh>Currency</TransactionTh>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({id, type, amount, currency}) =>
          <tr key={id}>
            <TransactionTd>{type}</TransactionTd>
            <TransactionTd>{amount}</TransactionTd>
            <TransactionTd>{currency}</TransactionTd>
          </tr>
          )}
        </tbody>
      </TransactionTable>
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: arrayOf(shape({
    id: string,
    amount: string,
    type: string,
    currency: string
  }))
}

export default TransactionHistory;
