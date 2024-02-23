document.getElementById('custom-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new URLSearchParams();
    formData.append('custom[fields][4]', document.getElementById('custom-field_4').value);
    formData.append('custom[id]', '442');
    formData.append('custom[author]', '1');
    formData.append('custom[post_id]', '20');
    
    fetch('http://localhost:3000/submit-form', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});

