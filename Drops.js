class Drop{
  constructor(x,y){
      var options={
         restitution:1.0,
          friction:0.1,
          density:1.0
      }
      this.x=x;
      this.y=y;
      
  
      this.body=Bodies.circle(this.x,this.y,5,options);
      World.add(world,this.body)
  }

  update(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.rain,{x : random(0,400),y : random(0,400)});
    } 

  }

  display(){
    var pos=this.body.position ;
    translate(pos.x,pos.y);
    fill("darkBlue")
    ellipse(0,0,this.r, this.r);
    
     

          var maxDrops=100;
          
     for(var i=0;i<maxDrops;i++){
         drops.push(new createdrop(random(0,400),random(0,400)));
     }

  }
}