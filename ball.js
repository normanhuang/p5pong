function Ball() {
    this.x = width / 2;
    this.y = 100;
    this.xVelocity = 4;
    this.yVelocity = 4;
    this.isPaddleOrBrickHit = false;
    
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
        return this.x <= 0 || this.x >= width || this.y <= 0 || this.isPaddleOrBrickHit;
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
            if (this.y <= 0 || this.isPaddleOrBrickHit) {
                this.yVelocity *= -1; 
                this.isPaddleOrBrickHit = false;
            }
            if(this.isPaddleOrBrickHit) {
                this.isPaddleOrBrickHit = false;
                this.yVelocity *= -1; 
                this.xVelocity *= -1;
            }
        }
    }
}