function branch(begin, end) {
  var angle;
  this.begin = begin;
  this.end = end;
  this.finished = false;
  this.jitter = function(){
    this.end.x += random(-1,1);
    this.end.y += random(-1,1);
  }
  this.show = function() {
    stroke(255);
    line(this.begin.x,this.begin.y,this.end.x,this.end.y)
  }
  this.twigA = function(){
    angle = PI / random(3,10);
    var dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(angle);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end,dir);
    var b = new branch(this.end,newEnd);
    return b;
  }
  this.twigB = function(){
    angle = PI / random(3,10);
    var dir = p5.Vector.sub(this.end,this.begin);
    dir.rotate(-angle);
    dir.mult(0.67);
    var newEnd = p5.Vector.add(this.end,dir);
    var b = new branch(this.end,newEnd);
    return b;
  }
}
