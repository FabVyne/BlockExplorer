document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value;
    const transactionDetails = document.getElementById('transactionDetails');

    // Clear previous results
    transactionDetails.innerHTML = '';

    // Fetch transaction details
    try {
        const response = await fetch(`/api/search?query=${query}`);
        const data = await response.json();

        if (data) {
            const detailsHTML = `
                <p><strong>Transaction Hash:</strong> ${data.hash}</p>
                <p><strong>From:</strong> ${data.from}</p>
                <p><strong>To:</strong> ${data.to}</p>
                <p><strong>Value:</strong> ${data.value}</p>
                <p><strong>Gas:</strong> ${data.gas}</p>
                <p><strong>Timestamp:</strong> ${data.timestamp}</p>
            `;
            transactionDetails.innerHTML = detailsHTML;
        } else {
            transactionDetails.innerHTML = '<p>No results found.</p>';
        }
    } catch (error) {
        console.error('Error fetching transaction details:', error);
        transactionDetails.innerHTML = '<p>Error fetching transaction details.</p>';
    }
});
