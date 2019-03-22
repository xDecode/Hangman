var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

var draw;
var pathFromx, 
    pathFromy,
    pathTox, 
    pathToy;

    function draw(pathFromx, pathFromy, pathTox, pathToy) {
    
        ctx.moveTo(pathFromx, pathFromy);
        ctx.lineTo(pathTox, pathToy);
        ctx.stroke(); 
    }

//berg
 function canvas1() {
 
    ctx.beginPath();
    ctx.arc(250, 400, 120, 0, 1*Math.PI, true);
    // ctx.scale(-1, 1);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

}
//balken
function canvas2() {
    draw(250,280,250,100);

}
//strickrechts
function canvas3() {
    ctx.lineWidth = 3;
    draw(250,100,370,100);

}
//seil
function canvasSeil() {
    ctx.lineWidth = 2;
    draw(370,100,370,140);

}
//Kopf
function canvas5() {
    ctx.beginPath();
    ctx.arc(370, 160, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();

}
//Stich vom Mann
function canvas6() {
    draw(370,180,370,240);
}
//armlinks
function canvas7() {
    ctx.lineWidth = 1;
    draw(370,210,350,190);

}
//armrechts
function canvas8() {
    draw(370,210,390,190);

}
//beinlinks
function canvas9() {
    draw(370,240,350,260);
}
//beinrechts
function canvas10() {
    draw(370,240,390,260);
}

