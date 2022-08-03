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
          {transactions.map((transaction) =>
          <tr key={transaction.id}>
            <TransactionTd>{transaction.type}</TransactionTd>
            <TransactionTd>{transaction.amount}</TransactionTd>
            <TransactionTd>{transaction.currency}</TransactionTd>
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
