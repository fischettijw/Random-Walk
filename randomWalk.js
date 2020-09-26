const sWidth = 800;
const sHeight = 400;
let pointX = sWidth / 2;
let pointY = sHeight / 2;
const pointSize = 10;
const cyclesPerSecond = 1;
let cycles = 0;

function setup() {
    createCanvas(sWidth, sHeight);
    frameRate(cyclesPerSecond);
}

function draw() {
    background(192);
    drawHorizontalPath(sHeight / 2, 2);
    stroke(0);
    fill(0);
    strokeWeight(pointSize);
    point(pointX, pointY);

    if (randomBetween(0, 2) == 0) {
        pointX -= pointSize;
    } else {
        pointX += pointSize;
    }
}

function drawHorizontalPath(y, thickness) {
    stroke('yellow');
    strokeWeight(thickness);
    line(0, y, sWidth, y)
    for (let x = 2 * pointSize; x < sWidth; x += 2 * pointSize) {
        line(x, y - pointSize, x, y + pointSize);
    }
    stroke('red');
    line(sWidth / 2, y - pointSize, sWidth / 2, y + pointSize);

    cycles += 1;
    textSize(36);
    text("Cycles:   " + cycles, 50, sHeight - 50);
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}