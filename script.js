//complete this code
class Rectangle {
	constructor(width,height)
	{
		width=this.width;
		height=this.height;
	}
	get width(){
		return this.width
	}

	get height(){
		return this.height
	}
	getArea(){
		return this.width*this.height
	}
}

class Square extends Rectangle {
	return 4*this.width
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
