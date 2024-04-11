const form = document.querySelector('form');
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    getJoke();
});

async function getJoke() {
    let term = document.querySelector('#getJoke').value;
    let res = await axios({
        url: 'https://icanhazdadjoke.com/search',
        method: 'get',
        headers: {
            'Accept': 'text/plain',
        },
        params: {
            term: term
        }
    });
    const results = res.data.split(/[\r\n]+/);
    if (results.length < 1) return;
    let r = Math.floor(Math.random() * results.length);
    const span = document.querySelector('span');
    span.innerText = results[r];
    document.querySelector('#getJoke').value = "";
}