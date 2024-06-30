function getDateNow() {
    const formatador = new Intl.DateTimeFormat('pt-BR');
    return formatador.format(new Date());
}


document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const formData = new FormData(this);
    const data = {
        Created: getDateNow()
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
    alert('Formulário enviado com sucesso!');
});