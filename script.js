function showNotification(callback) {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    if(callback) callback();

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
}


document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {
        Created: "x-sheetmonkey-current-date"
    };

    formData.forEach((value, key) => {
        data[key] = value;
    });

    await fetch('https://api.sheetmonkey.io/form/3JQrV16RX3t3hBhgQAhbn9', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    showNotification(clearForm)
});