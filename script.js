//complete this code
class Rectangle {
	constructor(width,height)
	{
		this.width_2=width;
		this.height_2=height;
	}
	get width(){
		return this.width_2
	}

	get height(){
		return this.height_2
	}
	getArea(){
		return this.width_2*this.height_2
	}
}

class Square extends Rectangle {
	return 4*this.width_2
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
