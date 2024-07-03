import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('balance');
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement API call to fetch data based on searchQuery
    console.log('Searching for:', searchQuery);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard">
      <nav className="navbar">
        <div className="nav-item" onClick={() => handleTabChange('balance')}>Balance</div>
        <div className="nav-item" onClick={() => handleTabChange('transactions')}>Transaction History</div>
      </nav>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter block number, transaction ID, or address"
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      <div className="content">
        {activeTab === 'balance' && (
          <div className="balance-section">
            <h2>Balance</h2>
            {balance !== null ? (
              <p>Current balance: {balance}</p>
            ) : (
              <p>Enter an address to view balance</p>
            )}
          </div>
        )}

        {activeTab === 'transactions' && (
          <div className="transactions-section">
            <h2>Transaction History</h2>
            {transactions.length > 0 ? (
              <ul className="transaction-list">
                {transactions.map((tx, index) => (
                  <li key={index} className="transaction-item">
                    <span>Date: {tx.date}</span>
                    <span>Time: {tx.time}</span>
                    <span>Amount: {tx.amount}</span>
                    <span>Status: {tx.status}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No transactions to display</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
