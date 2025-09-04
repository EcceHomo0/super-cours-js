// const apiDiv = document.querySelector('.apiContacter');

export async function contactApi () {

    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    console.log(data);
    // apiDiv.innerText = data.value;

    const titre = document.querySelector('h1');
    titre.innerText = data.value;
}
}
