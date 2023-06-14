class Emoji extends GameObject{
    //container,src,width,height,x,y,velX,velY,bgcolor
    fadeIn(){
        $(this.img).fadeIn("slow");
    }
    fadeOut(){
        $(this.img).fadeOut("slow");
    }
}