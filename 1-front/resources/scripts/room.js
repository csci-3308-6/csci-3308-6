var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var character = {
    name: "displayName",
    shape: "circle",
    color: "#0095DD",
    radius: 10
};

// These refer to the character's position.
var x = 400;
var y = 550;

var dx = 2;
var dy = 2;

function drawCircle() {
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.fillStyle = character.color;
    context.fill();
    context.closePath();
}

function drawSquare() {
    context.beginPath();
    context.rect(x - 10, y - 10, 20, 20);
    context.fillStyle = character.color;
    context.fill();
    context.closePath();
}

function drawTriangle() {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x - 10, y);
    context.lineTo(x, y - 20);
    context.lineTo(x + 10, y);
    context.fillStyle = character.color;
    context.fill();
    context.closePath();
}

function drawDisplayName() {
    context.font = "10px Arial";
    context.fillText(character.name, x - 2.5 * character.radius, y - 1.5 * character.radius);
}

function createCharacter() {
    if(character.shape == "circle") {
        drawCircle();
        drawDisplayName();
    }
    else if(character.shape == "square") {
        drawSquare();
        drawDisplayName();
    }
    else if(character.shape == "triangle") {
        drawTriangle();
        drawDisplayName();
    }
}

function drawTable(tableX, tableY) {
    context.beginPath();
    context.rect(tableX, tableY, 150, 100);
    context.fillStyle = "#34ad42";
    context.fill();
    context.closePath();
}

function drawTableName(tableName, tableX, tableY) {
    context.font = "10px Arial";
    context.fillStyle = "#000000";
    context.fillText(tableName, tableX, tableY);
}

function createTables() {
    drawTable(10, 10);
    drawTableName("Blackjack", 10, 10)
    drawTable(640, 10);
    drawTableName("Poker", 640, 10);
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;

function keyDownHandler(event) {
    if(event.code == "ArrowLeft") {
        leftPressed = true;
    }
    else if(event.code == "ArrowRight") {
        rightPressed = true;
    }
    else if(event.code == "ArrowUp") {
    	upPressed = true;
    }
    if(event.code == "ArrowDown") {
    	downPressed = true;
    }
}

function keyUpHandler(event) {
    if(event.code == "ArrowLeft") {
        leftPressed = false;
    }
    else if(event.code == "ArrowRight") {
        rightPressed = false;
    }
    else if(event.code == "ArrowUp") {
    	upPressed = false;
    }
    if(event.code == "ArrowDown") {
    	downPressed = false;
    }
}

function movementHandler() {
    if(leftPressed) {
        if(x - dx < character.radius) {
            createCharacter();
        }
        else {
            x -= dx;
        }
    }
    else if(rightPressed) {
        if(x + dx > canvas.width - character.radius) {
            createCharacter();
        }
        else {
            x += dx;
        }
    }
    else if(upPressed) {
        if(y + dy < character.radius + 5) {
            createCharacter();
        }
        else {
            y -= dy;
        }
    }
    else if(downPressed) {
        if(y - dy > canvas.height - character.radius - 5) {
            createCharacter();
        }
        else {
            y += dy;
        }
    }
}

function createRoom() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    movementHandler();
    createCharacter();
    createTables();
}

alert("Use the arrow keys to move your character.");

// Repeat createRoom function every 10 milliseconds.
setInterval(createRoom, 10);