class Explo extends GameObject {
    //container,src,width,height,x,y,velX,velY,bgcolor
    constructor(container,src,width,height,x,y,velX,velY,bgcolor){
        super(container,src,width,height,x,y,velX,velY,bgcolor);
        this.img.style.left=this.x+"px"; //충돌한 총알의 위치에서  생성되어야함.....
        this.img.style.top=this.y+"px";
    }

    fadeIn() {
        $(this.img).fadeIn("slow");
    }
    fadeOut() {
        $(this.img).fadeOut("slow");
    }
}