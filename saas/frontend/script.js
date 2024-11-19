async function formatText() {
    const textInput = document.getElementById('textInput').value;
    const formatType = document.getElementById('formatType').value;

    const response = await fetch('http://localhost:3003/api/text/format', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: textInput, formatType }),
    });

    const data = await response.json();
    document.getElementById('output').textContent = data.formattedText || 'Error';
}
