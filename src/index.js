class classeHeroi{
    constructor(nameHero, ageHero, typeHero){
        this.nameHero = nameHero;
        this.ageHero = ageHero;
        this.typeHero = typeHero;
    }

    atacar(){
        let ataque = "";
        switch(this.typeHero){
            case "mago":
                ataque = "usando magia";
            break;

            case "guerreiro":
                ataque = "usando a espada";
            break;

            case "monge":
                ataque = "usando artes marciais";
            break;

            case "ninja":
                ataque = "usando shuriken"
            break;
        }
        
        console.log(`Com apemas ${this.ageHero} anos, o ${this.typeHero} ${this.nameHero} atacou ${ataque}.`);
    }
}

let mago = new classeHeroi("Gerson", 70, "mago");
let guerreiro = new classeHeroi("Zequias", 42, "guerreiro");
let monge = new classeHeroi("Giliard", 36, "monge");
let ninja = new classeHeroi("Luciano", 41, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
