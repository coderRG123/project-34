class Hero {
  constructor(x,y,r)
	{
		var options = { 
			density: 1000,
			frictionAir:0.01
		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y);
			fill(255,0,255)
			ellipseMode(CENTER);
		ellipse(0,0,this.r, this.r)
			pop()
			
	}
}
