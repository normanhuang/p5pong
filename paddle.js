function Paddle() {
    this.x = mouseX;
    this.y = height - 30;
    this.width = 70;
    this.height = 20;
    
    this.show = function() {
        fill(255);
        if(this.x + this.width < width){
            rect(this.x, this.y, this.width, this.height)
        } else {
            rect(width - this.width, this.y, this.width, this.height)
        }
    };
    
    this.update = function(){
        this.x = mouseX;
    };
    
}