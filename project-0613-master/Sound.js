class Sound{
    constructor(src){
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
    }

   play(){
        let obj=this.sound;
        obj.play();
    }
    pause(){
        let obj=this.sound;
        obj.pause();
    }
}