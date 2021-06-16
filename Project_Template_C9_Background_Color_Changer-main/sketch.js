var redbtn;
var greenbtn;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  redbtn = createButton("change_colour_red");
  redbtn.position(100,50);
  redbtn.mousePressed(r);
  greenbtn = createButton("change_colour_green");
  greenbtn.position(100,100);
  greenbtn.mousePressed(g);
  
}
function draw() {
  background(r,g,b);


}




function g()
{
  
  r=0;
  g=255;
  b=0;
  

}
function r()
{
  
  r=255;
  g=0;
  b=0;
  


}



