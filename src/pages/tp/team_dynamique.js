let France_98 = [
	{image: "https://www.deux-zero.com/Photos/Joueurs/1998/BARTHEZ_Fabien_1998-06.jpg", nom: "Barthez", prenom: "Fabien", poste:"Gardien de but", numero: 16},
	{image: "https://www.deux-zero.com/Photos/Joueurs/1998/THURAM_Lilian_1998-06.jpg", nom: "Thuram", prenom: "Lilian", poste:"Défenseur latéral droit", numero: 15},
	{image: "https://www.deux-zero.com/Photos/Joueurs/1998/BLANC_Laurent_1998-06.jpg", nom: "Blanc", prenom: "Laurent", poste:"Libéro", numero: 5},
	{image: "https://www.deux-zero.com/Photos/Joueurs/1998/DESAILLY_Marcel_1998-06.jpg", nom: "Desailly", prenom: "Marcel", poste:"Stoppeur", numero: 8},
	{image: "https://www.deux-zero.com/Photos/Joueurs/1998/LIZARAZU_Bixente_1998-06.jpg", nom: "Lizarazu", prenom: "Bixente", poste:"Gardien de but", numero: 3},
	{image: "https://www.deux-zero.com/Photos/Joueurs/1998/DESCHAMPS_Didier_1998-06.jpg", nom: "Deschamps", prenom: "Didier", poste:"Milieu récupérateur droit", numero: 7},
	{image: "https://www.deux-zero.com/Photos/Joueurs/1998/PETIT_Emmanuel_1998-06.jpg", nom: "Emmanuel", prenom: "Petit", poste:"Milieu récupérateur gauche", numero: 17},
	{image: "https://www.deux-zero.com/Photos/Joueurs/1998/HENRY_Thierry_1998-06.jpg", nom: "Henry", prenom: "Thierry", poste:"Milieu offensif droit", numero: 12},
	{image: "https://www.deux-zero.com/Photos/Joueurs/1998/ZIDANE_Zinedine_1998-06.jpg", nom: "Zidane", prenom: "Zinedine", poste:"Milieu axial", numero: 10},
	{image: "https://www.deux-zero.com/Photos/Joueurs/1998/DJORKAEFF_Youri_1998-06.jpg", nom: "Djorkaeff", prenom: "Youri", poste:"Milieu offensif gauche", numero: 6},
	{image: "https://www.deux-zero.com/Photos/Joueurs/1998/GUIVARC'H_Stephane_1998-06.jpg", nom: "Guivarc'h", prenom: "Stéphane", poste:"Attaquant de pointe", numero: 9}
]




for (let joueur of France_98)
{
	let card = document.createElement('div');
	card.classList.add('card', 'bg-base-200', 'shadow-xl', 'm-4', 'p-4', 'w-64');

	let container_image = document.createElement('img');
	let container_nom = document.createElement('p');
	let container_prenom = document.createElement('p');
	let container_poste = document.createElement('p');
	let container_numero = document.createElement('p');
	container_image.src = joueur.image;
	container_nom.append("Nom: ",joueur.nom);
	container_prenom.append("Prénom: ",joueur.prenom);
	container_poste.append("Poste: ",joueur.poste);
	container_numero.append("Numéro: ",joueur.numero);
	
	card.append(container_image);
	card.append(container_nom);
	card.append(container_prenom);
	card.append(container_poste);
	card.append(container_numero);

	document.body.append(card);
}