function Ball() {
    this.x = width / 2;
    this.y = 40;
    this.xVelocity = 2;
    this.yVelocity = 2;
    this.isPaddleHit = false;
    
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
        return this.x <= 0 || this.x >= width || this.y <= 0 || this.y >= height || this.isPaddleHit;
    }
    this.update = function(){
        this.updateVelocityWhenHit();
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }
    
    this.updateVelocityWhenHit = function(){
        if (this.hits()) {
            if (this.x <= 0 || this.x >= width) {
                this.xVelocity *= -1;
            }
            if (this.y <= 0 || this.y >= height || this.isPaddleHit) {
                this.yVelocity *= -1; 
                this.isPaddleHit = false;
            }
            if(this.isPaddleHit) {
                this.isPaddleHit = false;
                this.yVelocity *= -1; 
                this.xVelocity *= -1;
            }
        }
    }
}