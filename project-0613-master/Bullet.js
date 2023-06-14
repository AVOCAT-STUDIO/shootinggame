class Bullet extends Box{
    constructor(container,width,height,x,y,velX,velY,bgcolor,text){
        super(container,width,height,x,y,velX,velY,bgcolor,text);
        this.div.style.borderRadius="25%";
    }
    render(){
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        if(this.y<=40){
            this.container.removeChild(this.div);
            let bulletIndex=bulletArray.indexOf(this);
            bulletArray.splice(bulletIndex , 1);
        }
    }
    hitCheck(){
        for(let i=0; i<enemyArray.length;i++){
            let result= collisionCheck(this, enemyArray[i]);
            if(result){
                let enemyIndex=enemyArray.indexOf(enemyArray[i]);
                let bulletIndex=bulletArray.indexOf(this);
                explosion(enemyArray[enemyIndex].x,enemyArray[enemyIndex].y);
                if(enemyArray[i].ex.innerText==(questArray[0].a+questArray[0].b)){
                    getScore(); 
                    showGoodEomoji();
                    for(let k=0;k<enemyArray.length;k++){
                        this.container.removeChild(enemyArray[k].div);
                    }
                    content.removeChild(questArray[0].div);
                    enemyArray.splice(0,enemyArray.length);
                    questArray.splice(0,1);
                    nextQuest();
                }else{
                    looseScore();
                    showBadEomoji();
                    
                    this.container.removeChild(enemyArray[i].div);
                    enemyArray.splice(enemyIndex,1);
                    
                }    
                this.container.removeChild(this.div);
                bulletArray.splice(bulletIndex,1);
            }

        }
    }
}