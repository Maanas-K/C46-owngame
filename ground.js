class Ground{

    constructor(x,y,width,height){

        var options = {
            isStatic : true
        }

        this.width = width
        this.height = height

        this.body = Bodies.rectangle(x,y,width,height, options)
        //this.width = 600
        //this.heigth = 20
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position

        fill ("brown")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)

      //  console.log(this.width + this.height)
    }
}

/*class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };*/