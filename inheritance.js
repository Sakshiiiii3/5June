class Animal{
   constructor(name,color) {
    this.name = name;
    this.color = color;
   }
   run(){
    console.log(this.name + " is running");
   }
}
class Monkey extends Animal{

     eat(){
        console.log(this.name + " eats banana");
     }
}
let chimp = new Animal("ch", "black");
let mon  = new Monkey("m", "brown");
mon.run();
mon.eat();