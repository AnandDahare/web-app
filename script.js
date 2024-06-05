function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;

    // Validate form values
    if (!name || !email || !item || !quantity || quantity <= 0) {
        alert('Please fill out all fields correctly.');
        return;
    }

    // Display summary
    document.getElementById('summaryName').textContent = name;
    document.getElementById('summaryEmail').textContent = email;
    document.getElementById('summaryItem').textContent = item;
    document.getElementById('summaryQuantity').textContent = quantity;

    // Show the summary
    document.getElementById('summary').classList.remove('hidden');
}

