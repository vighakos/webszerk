let ball = document.querySelector('#ball');
let bat = document.querySelector('#bat');
let ballsize = 60;
let batsize = 120;
let speed = 1;
let screenX;
let screenY;
let dx = 1;
let dy = 1;

let game = setInterval(moveBall, 1);

getWindowSize();
setBallStartPoz();
setBatPoz();
setBallSize(ballsize);
setBatSize(batsize);

function moveBall(){
    ballX += dx * speed;
    ballY += dy * speed;

    setBallPoz(ballX, ballY);
    
    ball.style.top = ballY + 'px';
    ball.style.left = ballX + 'px';

    //ütközés következik

    if(ballY <= -10)
    {
        dy *= -1;
    }

    if((ballX >= (screenX - ballsize)) || (ballX <= -10))
    {
        dx *= -1;
    }

    if(ballY >= batY)
    {
        let ballMid = (ballX+ballsize)/2;
        if((ballMid >= batX) && ballMid <= (batX + batsize))
        {
            dy *= -1;
        }
    }

    if(ballY >= (screenY - ballsize))
    {
        clearInterval(game);
        window.alert("Vége :(");
    }
    
}

function setBallSize(size){
    ball.style.height = size + 'px';
    ball.style.width = size + 'px';
}

function setBallPoz(x, y){
    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
}

function getWindowSize(){
    screenX = window.innerWidth;
    screenY = window.innerHeight;
    setBatStartPoz()
}

function setBallStartPoz(){
    ballX = Math.round(Math.random() * screenX);
    ballY = 0;
}

function setBatSize(size){
    bat.style.width = size + 'px';
    bat.style.height = 15 + 'px';
}

function setBatPoz(x){
    bat.style.top = batY + 'px';
    bat.style.left = x + 'px';
}

function setBatStartPoz(){
    batX = 0;
    batY = screenY - 200;
    setBatPoz(batX, batY);
}

window.addEventListener('resize', getWindowSize);

window.addEventListener('keydown', function(e){

    //bal 37
    //jobb 39

    if(e.keyCode == 39){
        if(batX+batsize < this.screenX){
            batX += 10;
            setBatPoz(batX, this.screenY);
        }
    }

    if(e.keyCode == 37){
        if(batX+batsize < this.screenX){
            batX -= 10;
            setBatPoz(batX, this.screenY);
        }
    }
});

window.addEventListener('mousemove', function(e){
    batX = e.x - 60;
    console.log(batX);
    setBatPoz(batX);
});

