function Circle (radius){
  this.radius = radius;
}
Circle.prototype.getArea = function(){
  return Math.PI * Math.pow(this.radius, 2);
}
x = prompt("Enter the radius: ");
var mycircle = new Circle(x);
console.log(mycircle.getArea());
