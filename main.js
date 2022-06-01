var canvas= new fabric.Canvas('mycanvas');
playerx=10;
playery=10;
block_img_height=30;
block_img_width=30;
var player_object="";

var block_img_object="";
function playerupdate(){
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top:playery,
    left:playerx
});
canvas.add(player_object);


});
}
function block_img_update(get_img){
  fabric.Image.fromURL(get_img,function(Img){
block_img_object=Img;
block_img_object.scaleToWidth(block_img_width);
block_img_object.scaleToHeight(block_img_height);
block_img_object.set({
    top:playery,
    left:playerx
});
canvas.add(block_img_object);
});
}
window.addEventListener("keydown",My_keydown);
function My_keydown(e){
    
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true && keypressed=='80'){
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(e.shiftKey==true && keypressed=='77'){
        block_img_width=block_img_width-10;
        block_img_height=block_img_height_10;
        document.getElementById("current_width").innerHTML=block_img_width;
        Document.getElementById("current_height").innerHTML=block_img_height;
    }
    if(keypressed=='38'){
        up();
    }
    if(keypressed=='40'){
        down();
    }
    if(keypressed=='37'){
       left(); 
    }
    if(keypressed=='39'){
        right();
    }
    if(keypressed=='87'){
        block_img_update('wall.jpg');
    }
if(keypressed=='84'){
    block_img_update('trunk.jpg');
}
if(keypressed=='68'){
    block_img_update('dark_green.png');
}
if(keypressed=='76'){
    block_img_update('light_green.png');
}
if(keypressed=='71'){
    block_img_update('ground.png');
}
if(keypressed=='89'){
    block_img_update('yellow_wall.png');
}
if(keypressed=='82'){
    block_img_update('roof.png');
}
if(keypressed=='67'){
    block_img_update('cloud.jpg');
}
if(keypressed=='85'){
    block_img_update('unique.png');

}
}
function up(){
    if(playery>=0){
        playery=playery-block_img_height;
        canvas.remove(player_object);
        playerupdate();
    }
}
function down(){
    if(playery<=500){
        playery=playery+block_img_height;
        canvas.remove(player_object);
        playerupdate();
    }

}
function left(){
    if(playerx>=0){
        playerx=playerx-block_img_width;
        canvas.remove(player_object);
        playerupdate();
    }
}
function right(){
    if(playerx<=850){
        playerx=playerx+block_img_width;
        canvas.remove(player_object);
        playerupdate();
    }

}