class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.array = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>10 && this.body.position.x>250){
    var position = [this.body.position.x,this.body.position.y];
    this.array.push(position);
    }
    for(var i = 0; i<this.array.length;i++){
      image(this.smoke,this.array[i][0],this.array[i][1])
    }
    super.display();
  }
}
