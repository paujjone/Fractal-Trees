var angle;
var newangle;
function branch(begin, end) {
  this.begin = begin;
  this.end = end;
  this.finished = false;
  this.show = function() {
    stroke(255);
    line(this.begin.x,this.begin.y,this.end.x,this.end.y)
  }
  this.twigA = function(){
    angle = PI / 4
    // if (count >= 1){
    //   angle = newangle;
    // }
    var dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(angle);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end,dir);
    var b = new branch(this.end,newEnd);
    return b;
  }
  this.twigB = function(){
    angle = PI / 4;
    var dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(-angle);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end,dir);
    var b = new branch(this.end,newEnd);
    return b;
  }
}
