//    PART    1
//

class Cat {
  constructor (name, color, age, owner, isPlayful){
      this.name: name;
      this.color: color;
      this.age: age;
      this.owner: owner;
      this.isPlayful: true || false;
    }
    meowYear(){
      this.age++
      console.log('hurray you are a year older!')
    }
  }

const morpheus = new Cat('Morpheus', 'Black',  7 , 'Chris', true);
const copernicus = new Cat('Copernicus', 'Tiger Gray', 2 , 'Amber', true);
console.log(morpheus);
console.log(copernicus);
meowYear(morpheus);
meowYear(copernicus);

//    PART      2
//

//function is in cat class as method

let catArray = ['Morpheus', 'Copernicus', 'Garfeild', 'Gigi', 'Tom', 'Simba']
console.log('the fourth cat is' + catArray[3]);

const catPerson = {
  cats: ['Morpheus', 'Copernicus', 'Garfeild', 'Gigi', 'Tom', 'Simba'],
  lovesCats: true,
}

//    PART      3
//

class Pirate {

  constructor(name, loot, quote){
    this.name = name;
    this.loot = loot;
    this.quote = quote;
  }
  buyRum(){
    this.loot--;
    console.log('YO HO HO AND A BOTTLE O RUM')
  }
  seaShanty(){
    console.log('Soon may the Wellerman come To bring us sugar and tea and rum one day, when the tonguing is done Well take our leave and go')
  }
  cptPhillips(){
    return this.quote = "I am the captain now"
  }
}

let flyingDutchman = ['Salt Bae', 'Rick', 'Morty']
let royalFortune = ['Cartman', 'Roger', 'Steve']
const saltbae = new Pirate('Salt Bae', '400', 'This is a steak, why are we on the ocean?')
const rick = new Pirate('Rick', '300', 'Screw you Morty')
const morty = new Pirate('Morty', '12', 'No, screw you Rick')
const cartman = new Pirate('Cartman', '232', 'You will respect my Athoritaay!')
const roger = new Pirate('Roger', '300', 'Roger Roger')
const steve = new Pirate('Steve', '300', 'This does not look like Minecraft!'')
