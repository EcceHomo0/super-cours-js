let compteur = document.getElementById('compteur');
let bouton_increment = document.getElementById('incrementer');
let bouton_reset = document.getElementById('reset');
compteur.innerText = localStorage.getItem('compteur') || 0;
bouton_increment.addEventListener('click', () => {
    compteur.innerText = parseInt(compteur.innerText) + 1;
    localStorage.setItem('compteur', compteur.innerText);
})

bouton_reset.addEventListener('click', () => {
    compteur.innerText = 0;
    localStorage.setItem('compteur', compteur.innerText);
})