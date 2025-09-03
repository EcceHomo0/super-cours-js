let titre = document.querySelector('h1');

let texte_initial = titre.innerText;

let nouveau_titre = " -- 🥳 -- ";

let etat = true;

titre.addEventListener('click', () => {
    // if (etat == true) 
    // {
    //     titre.innerText = nouveau_titre;
    //     etat = !etat;
    // }
    // else
    // {
    //     titre.innerText = texte_initial;
    //     etat = !etat;
    // }
    etat ? titre.innerText = nouveau_titre : titre.innerText = texte_initial;
    etat = !etat;
});