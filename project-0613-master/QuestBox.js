class QuestBox extends Box{
    constructor(container,width,height,x,y,velX,velY,bgcolor,text){
        super(container,width,height,x,y,velX,velY,bgcolor,text);

        
        this.a=getRandomByRange(parseInt(inputA.value),parseInt(inputB.value));
        this.b=getRandomByRange(parseInt(inputA.value),parseInt(inputB.value));

        
        this.div.style.border="5px solid darkblue";
        this.div.style.borderRadius="15%";
        this.div.style.opacity=0.7;
        this.div.innerText=this.a+"+"+this.b+"=?";
        this.div.style.fontSize=50+"px";
        this.div.style.display="none";
    }
    tick(){
        this.x=this.x+this.velX;
        this.y=this.y+this.velY;
    }
    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px"; 
    }

    slideDown(){
        $(this.div).slideDown("slow");
    }
    slideUp(){
        $(this.div).slideUp();
    }

}