class Character {
  //construire une classe du personnage
  constructor(name, mh) {
    this.name = name;
    this.mh = mh; //mh= mental health
  }
}

let John = new Character("John", 10); //profil du personnage
console.log(John.name, John.mh);

let musics = [
  "Anissa de Wejdene",
  "Seven de Jungkook",
  "I'm bad too de Hwasa",
  "Loser=Lover de TXT",
  "Super Shy de NewJeans",
]; //tableau des musiques
console.log(musics);

class Trip {
  //construire une classe du voyage
  constructor(radio, trafficLight, change) {
    this.radio = radio;
    this.trafficLight = trafficLight;
    this.change = change;
  }
}

let back = new Trip(musics, 30, 0); //chemin du retour

let alive = true; //est en vie
//condition de vie
while (alive && back.trafficLight > 0) {
  //condition tant que
  back.radio = Math.floor(Math.random() * 5); //choix de musique aleatoire
  console.log(musics[back.radio]); //connecter musique et radio
  if (back.radio == 0) {
    John.mh = John.mh - 1; //actualliser le mh puis - 1
    back.change = back.change + 1; //actualliser le changement puis + 1
    back.trafficLight = back.trafficLight - 1; // actualliser le feu tricolore puis - 1
    console.log(
      `Il reste ${back.trafficLight} feux avant que John rentre chez lui.`
    );
    //afficher le nom de feu restant

    if (John.mh == 0) {
      alive = false; //si etre en vie est faux donc = mort du perso
      console.log("Explosion");
      break; /**termine la boucle */
    }
  } else {
    back.trafficLight = back.trafficLight - 1;
    console.log(
      `Il reste ${back.trafficLight} feux avant que John rentre chez lui.`
    );
  }
  if (John.mh > 0 && back.trafficLight == 0) {
    console.log(
      `John est bien rentré, il lui aura fallu ${back.change} changement de taxi avant que John ne rentre chez lui.`
    );
    break;
  }
}
