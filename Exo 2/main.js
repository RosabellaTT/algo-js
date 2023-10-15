//construire une class de Jason
class Jason {
  constructor() {
    this.nom = "Jason";
    this.mourir = 0.7;
    this.degats = 0.5;
    this.mourirdegat = 0.2;
    this.vie = 100;
  }

  //cree une condition
  attaquer(survivant) {
    if (Math.random() <= this.degats) {
      // choisir aleatoirement
      if (survivant.esquiver()) {
        survivant.vie -= 10;
        return `${survivant.nom} a esquivé et a infligé 10 points de dégâts à ${this.nom}`;
      } else if (survivant.mourirInfligerDegat()) {
        survivant.vie -= 15;
        return `${survivant.nom} est mort en infligeant 15 points de dégâts à ${this.nom}`;
      } else {
        survivant.vie -= 0; //0 car est juste mort sans infliger de dégats
        return `${survivant.nom} a été tué par ${this.nom}`;
      }
    } else {
      return `${this.nom} a manqué son attaque contre ${survivant.nom}`;
    }
  }
}

//construire une classe des personnages
class Character {
  constructor(nom, mourir, degats, mourirdegat) {
    this.nom = nom;
    this.mourir = mourir;
    this.degats = degats;
    this.mourirdegat = mourirdegat;
    this.vie = 100;
  }

  esquiver() {
    return Math.random() <= 0.5;
  }

  mourirInfligerDegat() {
    return Math.random() <= this.mourirdegat;
  }
}

const jason = new Jason();

//liste des survivants
const survivants = [
  new Character("Tyler", 0.2, 0.5, 0.3), //aka le sportif
  new Character("Eugene", 0.5, 0.2, 0.3), //aka l'intello
  new Character("Nancy", 0.4, 0.4, 0.2), //aka la blonde
  new Character("Sharon", 0.7, 0.1, 0.2), //aka la fille populaire
  new Character("Brian", 0.2, 0.7, 0.1), //aka le chasseur
];

//condition
while (jason.vie > 0 && survivants.some((s) => s.vie > 0)) {
  for (let survivant of survivants) {
    console.log(jason.attaquer(survivant));
  }
}

console.log("Morts:");
for (let survivant of survivants) {
  if (survivant.vie <= 0) {
    console.log(survivant.nom);
  }
}

if (jason.vie <= 0) {
  console.log("Les survivants ont tué Jason");
} else {
  console.log("Jason a éliminé tout les survivants");
}
