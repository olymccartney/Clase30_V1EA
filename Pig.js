class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
  }
//Nueva Funcion Display Para ver velocidad y para desaparecer al cerdo
  display(){

    console.log(this.body.speed);

    if(this.body.speed < 3){
    super.display();
      }
      else{
    World.remove(world, this.body);
  }
  }

}