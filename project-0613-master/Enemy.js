class Enemy extends Box {
    //container,width,height,x,y,velX,velY,bgcolor,text
    constructor(container, src, width, height, x, y, velX, velY, bgcolor, text) {
        super(container, width, height, x, y, velX, velY, bgcolor, text);
        this.alien;
        this.src = src;
        this.alien = document.createElement("img");
        this.alien.src = this.src;
        this.alien.style.width = this.width + "px";
        this.alien.style.height = this.height + "px";
        this.alien.style.position = "absolute";
        this.alien.style.left = 0 + "px";
        this.alien.style.top = 0 + "px";
        this.div.appendChild(this.alien);

        this.ex;
        this.ex = document.createElement("div");
        this.ex.style.width = 60 + "px";
        this.ex.style.height = 60 + "px";
        this.ex.style.position = "absolute";
        this.ex.style.left = 30 + "px";
        this.ex.style.top = 45 + "px";
        this.ex.style.fontWeight = "bold";
        this.ex.style.fontSize = 50 + "px";
        this.ex.style.textAlign = "center";
        //this.ex.style.background="red";
        this.ex.innerText = this.text;
        this.div.appendChild(this.ex);
    }

    moveLeftRight() {
        if (this.y >= 300) {
            this.velY = 0;

            if (this.x >= 1330 || this.x <= -20) {
                flag3 = !flag3;
            }

            this.velX=(flag3)?  5 : -5;
        }

    }
    fadeOut(){
        $(this.div).fadeOut("slow");
    }
}
