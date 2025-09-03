let input = document.getElementsByTagName('input')[0];
let enregistrement = document.getElementById('render');
let bouton = document.getElementById('submit');

input.addEventListener('keyup', (e) => {
    enregistrement.textContent += e.key;
    let nbre_caracteres = input.value.length;
    // if (nbre_caracteres > 5) 
    // {
    //     bouton.disabled = true;
    // }
    // else
    // {
    //     bouton.disabled = false;
    // }   
    bouton.disabled = nbre_caracteres > 5 ? true : false;
});

