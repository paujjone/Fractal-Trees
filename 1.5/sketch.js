//Global Variables
var tree = [];
//Setup & Draw
function setup() {
    createCanvas(400, 400);
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - 100);
    var root = new branch(a,b);
    tree[0] = root;
}
function draw() {
    background(100);
    for( var i = 0; i < tree.length; i++) {
      tree[i].show();
    //  tree[i].jitter();
    }
}
//Program
function mousePressed(){
    for( var i = tree.length - 1; i >= 0; i--){
      if(!tree[i].finished) {
        tree.push(tree[i].twigA());
        tree.push(tree[i].twigB());
      }
      tree[i].finished = true;
    }
  }
