
var canvas = document.getElementById('draw');
var ctx = canvas.getContext('2d');
var draw=false;
var temPos=[0,0];

canvas.addEventListener('mousedown',function(e){
    draw=true;
    temPos=[e.pageX-canvas.offsetLeft,e.pageY-canvas.offsetTop];
});

canvas.addEventListener('mousemove',function(e){
    if(draw){
        var temPos=[e.pageX-canvas.offsetLeft,e.pageY-canvas.offsetTop];
        ctx.beginPath();
        ctx.moveTo(temPos[0],temPos[1]);
        ctx.lineTo(newPos[0],newPos[1]);
        ctx.closePath();
        temPos=newPos;
        connection.invoke("SendDraw", {
            "startPos": tempPos,
            "endPos": newPos,
            "color": ctx.strokeStyle,
            "lineWidth": ctx.lineWidth
        
        }).catch(function (err) {
            return console.error(err.toString());
        });
    }

});

canvas.addEventListener('mouseup',function(){
    draw=false;
});

var color=document.getElementById('color');
var lineWidth = document.getElementById('lineWidth');
ctx.storkeStyle=color.value;
ctx.lineWidth=lineWidth.value;

color.addEventListener('input',function(){
    ctx.storkeStyle=color.value;
});
linewidth.addEventListener('input',function(){
    ctx.linewidth=linewidth.value;
})

var connection=new signalR.HubConnectionBulider().withUr1("/drawHub").build();
connection.star().catch(function(err){
    return console.error(err.toSring());
});
{
    "starPos": [10,20],
    "endPos": [40,50],
    "color" :"orange",
    "lineWidth":10
}

connection.on("ReceiveDraw", function (json) {
    ctx.strokeStyle = json.color;
    ctx.lineWidth = json.lineWidth;
    ctx.beginPath();
    ctx.moveTo(json.startPos[0], json.startPos[1]);
    ctx.lineTo(json.endPos[0], json.endPos[1])
    ctx.closePath();
    ctx.stroke();
});

