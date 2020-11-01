class pig extends BaseClass
{
    // // constructor(x,y)
    // {
    //     var options = {
    //     restitution:1
    //     }
    //     this.body = Bodies.rectangle(x,y,50,50,options);
    //     this.width = 50;
    //     this.height = 50;      
    //     World.add(world, this.body);
          
    // }
    constructor(x,y)
    {
      super(x,y,50,50);
     this.image = loadImage("sprites/enemy.png")
    
   }


display(){
    super.display();
   }



} 
