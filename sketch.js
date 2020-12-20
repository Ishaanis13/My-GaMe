var ThiefImage, CowboyImage


function preload() {

    ThiefImage = loadImage("Images/Thief.png");
    CowBoyImage = loadImage("Images/Capture.png");
}



function setup() {
    var cowBoy = createSprite(20, 200, 10, 50);
    var Thief = createSprite(380, 200, 10, 50);
    Thief.addImage(ThiefImage);
    cowBoy.addImage(CowBoyImage);
}


function draw() {
    createCanvas(displayWidth, displayHeight);
    drawSprites();
} 