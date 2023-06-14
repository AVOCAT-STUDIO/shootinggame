class Restart extends Box{
    constructor(container,width,height,x,y,velX,velY,bgcolor,text){
        super(container,width,height,x,y,velX,velY,bgcolor,text);
        this.button;
        this.div.style.textAlign="center";
        this.div.style.fontSize=70+"px";
        this.div.style.border="3px solid darkblue";
        this.div.style.borderRadius="5%";
        this.div.style.opacity=0.9;

        this.button=document.createElement("button");
        this.button.style.width=200+"px";
        this.button.style.height=120+"px";
        this.button.style.position="absolute";
        this.button.style.left=150+"px";
        this.button.style.top=120+"px";
        this.button.style.border="3px solid darkblue";
        this.button.style.borderRadius="5%";
        this.button.style.background="lightblue";
        this.button.style.fontSize=30+"px";
        this.button.innerText="Restart";
        this.div.appendChild(this.button);
        this.button.addEventListener("click", function(){
            location.reload();
        });
    }
}