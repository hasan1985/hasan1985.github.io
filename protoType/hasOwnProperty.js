//hasOwnProperty

function point() {
	let x;
	let y;
};

let p = new Point(); // not calling the function, but creating an object with x,y, really wired

point.prototype.inheritedProperty = "not mine";

console.log(p);
