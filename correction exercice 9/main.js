class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }
  islucky() {
    return Math.floor(Math.random() * 100) <= this.luck;
  }

  attackPokemon(pokemon) {
    if (islucky()) {
      let damages = this.attack - pokemon.defense;
      pokemon.hp -= damages;
      console.log(
        "${this name} a attaqué ${pokemon.name}, perdant ${damage} hp !"
      );
    } else {
      console.log("${this name} a raté son attaque !");
    }
  }
}

let moustillon = new Pokemon("moustillon", 10, 5, 30, 75);
let rondoudou = new Pokemon("rondoudou", 15, 3, 30, 50);

let percent = 75;
let islucky = Math.floor(Math.random() * 100) >= percent;

while (moustillon.hp > 0 && rondoudou.hp > 0) {
  rondoudou.attackPokemon(moustillon);

  if (moustillon.hp <= 0) {
    console.log("Moustillon a perdu le combat, il est K.O");
    break;
  }

  moustillon.attackPokemon(rondoudou);

  if (rondoudou.hp <= 0) {
    console.log("Rondoudou a perdu le combat, il est K.O");
    break;
  }
}

console.log("le combat est terminé.");
