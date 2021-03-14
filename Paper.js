class Paper{

	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            friction:0.8,
            restitution:0.3			
			}
		
		this.r=r
		
		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			ellipseMode(CENTER)
			//strokeWeight(4);
			fill("blue")
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}