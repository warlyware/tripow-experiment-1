var clouds = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    colorMode(RGB);
    background(207, 207, 207);
}

function draw() {
    colorMode(RGB);
    background(207, 207, 207, 10);
    console.log(random());
    if (random(1) < .01) {
        createCloud();
    }
}

function createCloud() {
    var x = getRandomNumber(1, window.innerWidth);
    var y = getRandomNumber(1, window.innerHeight);
    var height = getRandomNumber(40, 150);
    var width = getRandomNumber(window.innerWidth * 0.1, window.innerWidth * 0.4);
    stroke(255);
    strokeWeight(4);
    ellipse(x, y, width, height);
    console.log('cloud, boom!');
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

window.onresize = function() {
    setup();
};
