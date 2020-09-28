const sWidth = 800;
const sHeight = 400;
let pointX = sWidth / 2;
let pointY = sHeight / 2;
const pointSize = 10;
const cyclesPerSecond = 60;
let cycles = 0;
let aveSum = 0;
let average = 0;

function setup() {
    createCanvas(sWidth, sHeight);
    frameRate(cyclesPerSecond);
}

function draw() {
    background(192);
    drawHorizontalPath(sHeight / 2, 2);
    drawPoint(pointX, pointY, pointSize);
    updatePointXY();
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
    displayStatusLine();
}

function randomBetween(min, max) {
    return floor(random() * (max - min)) + min;
}

function displayStatusLine() {
    textSize(20);
    text(`Cycles:   ${cycles}      Random Average: ${average}  ( ${pointX},  ${pointY} )`, 10, sHeight - 10);
}

function updatePointXY() {
    if (randomBetween(0, 2) == 0) {
        pointX -= pointSize;
        aveSum -= 1;
    } else {
        pointX += pointSize;
        aveSum += 1;
    }
    average = aveSum / cycles;
}

function drawPoint(x, y, size) {
    stroke(0);
    fill(0);
    strokeWeight(size);
    point(x, y);
}