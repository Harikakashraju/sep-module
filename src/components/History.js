// components/History.js
import React from 'react';
import { Link } from 'react-router-dom';

const History = ({ history }) => {
  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {history.map((word) => (
          <li key={word}>
            <Link to={`/word/${word}`}>{word}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
