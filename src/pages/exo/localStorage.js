// let input = document.getElementsByTagName('input')[0];
// let enregistrement = document.getElementById('render');
// let bouton = document.getElementById('submit');

// input.addEventListener('keyup', (e) => {
//     enregistrement.textContent += e.key;
//     let nbre_caracteres = input.value.length; 
//     bouton.disabled = nbre_caracteres > 5 ? true : false;
// });

let monTxt = document.getElementsByTagName('input')[0];
let rendu = document.getElementById('render');
let bouton = document.getElementById('submit');

monTxt.addEventListener('keyup', (e) => {    
    localStorage.setItem('monSuperTexte',monTxt.value);
    rendu.innerText = monTxt.value;
});

document.addEventListener('DOMContentLoaded', () => {
    monTxt.value = localStorage.getItem('monSuperTexte');
    rendu.innerText = monTxt ? localStorage.getItem('monSuperTexte') : '';
})
