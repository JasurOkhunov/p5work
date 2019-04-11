var xPos, yPos, size, r, g, b; 


function setup() {
 //out setup code here
 createCanvas(600,700);
 xPos = 0;
 yPos = height/2;  
r = random(255);
g = random(255);
b = random(255);    
   
}

function draw() {
    
background("#f4e542");  
fill(r, g, b);   
noStroke();
ellipse(xPos, yPos, size, size);
xPos = xPos + 1;
ellipse();
    textSize(32);
fill("black");
text('MMP100           Jasur', 10, 30);
fill(0, 102, 153);
text('MMP100           Jasur', 10, 60);
fill(0, 102, 153, 51);
text('MMP100           Jasur', 10, 90);
    
    if(xPos>=700){
 xPos=0;


}

}

function mousePressed(){
    yPos = mouseY;
    size = random(width);
    
    r = random(255);
g = random(255);
b = random(255);
}
