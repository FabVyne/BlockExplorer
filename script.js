document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    if (!query) {
        alert('Please enter a block number, transaction ID, or address.');
        return;
    }
    
    // Mock function to demonstrate switching sections and displaying data
    // Replace with actual API call and logic
    if (isAddress(query)) {
        displayBalance(query);
        displayTransactions(query);
    } else {
        displayTransactionDetails(query);
    }
});

document.getElementById('balance-link').addEventListener('click', function() {
    showSection('balance-section');
});

document.getElementById('transactions-link').addEventListener('click', function() {
    showSection('transactions-section');
});

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function isAddress(query) {
    // Mock function to check if the query is an address
    // Replace with actual validation logic
    return query.length === 42; // Typical length of an Ethereum address
}

function displayBalance(address) {
    // Mock function to display balance
    // Replace with actual API call
    document.getElementById('balance').innerText = `Balance for ${address}: 10 ETH`;
}

function displayTransactions(address) {
    // Mock function to display transactions
    // Replace with actual API call
    const transactions = [
        { date: '2023-01-01', amount: '1 ETH', status: 'Confirmed' },
        { date: '2023-01-02', amount: '2 ETH', status: 'Pending' }
    ];
    const transactionsList = document.getElementById('transactions-list');
    transactionsList.innerHTML = '';
    transactions.forEach(tx => {
        const listItem = document.createElement('li');
        listItem.innerText = `${tx.date} - ${tx.amount} - ${tx.status}`;
        transactionsList.appendChild(listItem);
    });
}

function displayTransactionDetails(txId) {
    // Mock function to display transaction details
    // Replace with actual API call
    alert(`Transaction details for ${txId}`);
}
