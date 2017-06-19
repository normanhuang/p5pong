function Ball() {
    this.x = width / 2;
    this.y = 40;
    this.xVelocity = 2;
    this.yVelocity = 2;
    
    this.show = function(){
        if (this.hits()){
            fill('red');
        }
        else{
            fill(255);
        }
        ellipse(this.x, this.y, 20, 20);
    }
    
    this.hits = function(){
        return this.x <= 0 || this.x >= width || this.y <= 0 || this.y >= height;
    }
    this.update = function(){
        this.updateWhenHits();
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }
    
    this.updateWhenHits = function(){
        if (this.hits()) {
            if (this.x <= 0 || this.x >= width) {
                this.xVelocity *= -1;
            }
            if (this.y <= 0 || this.y >= height) {
                this.yVelocity *= -1; 
            }
           
        }
    }
}