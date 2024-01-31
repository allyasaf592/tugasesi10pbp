//PUT Request mahasiswa
const mahasiswaNim = '100001';
const updatedData = {
    nama : 'yaya',
    gender : 'P',
    prodi : 'TI',
    alamat : 'Jl. gading'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method : 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error', error));

//handle response
function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(`Request failed with status: ${response.status}`);
    }
}

//handle error
function handleError(error) {
    console.error('Request failed:', error.message);
}