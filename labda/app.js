let ball = document.querySelector('#ball');
let bat = document.querySelector('#bat');
let pointsLbl = document.querySelector('#pointsLbl');
let speedLbl = document.querySelector('#speedLbl');
let gift = document.querySelector('#gift');
let ballsize = 60;
let batsize = 1200;
let speed = 3;
let points = 0;
let giftx;
let gifty;
let screenX;
let screenY;
let dx = 1;
let dy = 1;

getWindowSize();
setBallStartPoz();
setBatPoz();
setBallSize(ballsize);
setBatSize(batsize);
updateResult();
clearGift();

let game = setInterval(moveBall, 1);

function fallingGift(){
    gifty += 1;
    setGiftPoz(giftx, gifty);
    if (gifty >= batY+20){
        //window.alert('elkaptuk')
        let giftMid = giftx + 24;
        if ((giftMid >= batX) && (giftMid <= (batX + batsize))){
            generateGift();
        }
    }
    if (gifty >= screenY){
        clearInterval(giftfall);
        clearGift();
    }
}

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

    if(ballY > batY)
    {
        let ballMid = ballX+(ballsize/2);
        if((ballMid >= batX) && ballMid <= (batX + batsize))
        {
            dy *= -1;
            points++;
            if (points % 10 == 0){
                speed++;
            }
            if (points % 2 == 0){
                setGiftStartPoz();
                let giftfall = setInterval(fallingGift, 1);
            }
            updateResult();
        }
    }

    if(ballY >= (screenY - ballsize))
    {
        clearInterval(game);
        //window.alert("Vége :(");
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

function setGiftPoz(x, y){
    gift.style.top = y + 'px';
    gift.style.left = x + 'px';
}

function getWindowSize(){
    screenX = window.innerWidth;
    screenY = window.innerHeight;
    setBatStartPoz()
}

function setBallStartPoz(){
    ballX = Math.round(Math.random() * screenX);
    ballY = 0;
    setBallPoz(ballX, ballY);
}

function setGiftStartPoz(){
    giftx = Math.round(Math.random() * screenX);
    gifty = 0;
    setBallPoz(giftx, gifty);
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
    setBatPoz(batX);
});

function updateResult(){
    pointsLbl.innerHTML = points;
    speedLbl.innerHTML = speed-2;
}

function clearGift(){
    gifty = -100;
    giftx = -100;
    setGiftPoz(giftx, gifty);
}

function generateGift(){
    let x = Math.round(Math.random()*8);
    switch(x)
    {
        case 0:{speed++; updateResult(); break;}
        case 1:{speed--; updateResult(); break;}
        case 2:{ballsize *= 2; setBallSize(); break;}
        case 3:{ballsize /= 2; setBallSize(); break;}
        case 4:{batsize *= 2; setBatSize(); break;}
        case 5:{batsize /= 2; setBatSize(); break;}
        case 6:{points *= 2; updateResult(); break;}
        case 7:{points /= 2; updateResult(); break;}
    }
    clearInterval(giftfall);
    clearGift();
}

