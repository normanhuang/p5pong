function Bricks() {
    this.rows = Math.floor(random(2,4));
    this.brickThickness = 50;
    this.brickRoundRadius = 3;
    this.bricks = [];
    
    
    
    this.show = function(){
        var totalWidth = 0 ;
        fill('blue');

        var currentRow = 0;
        for(var i = 0; i < this.bricks.length; i++){
            if(currentRow != this.bricks[i].row) {
                totalWidth = 0;
            }
            this.bricks[i].x = totalWidth;
            this.bricks[i].y = this.bricks[i].row * this.brickThickness;
            if(this.bricks[i].isActive){
                rect(totalWidth, this.bricks[i].row * this.brickThickness, this.bricks[i].width, this.brickThickness, this.brickRoundRadius);
            }
            
            totalWidth += this.bricks[i].width;
            currentRow = this.bricks[i].row;
            
        }
    };
    
    this.setup = function(){
        this.bricks = this.makeBrickRows(width);
    };
    
    this.makeBrickRows = function(totalWidth) {
        var bricks = [];
        var resetWidth = totalWidth;
        
        for(var j = 0; j < this.rows; j++) {
            var numberOfBricks = Math.ceil(random(6,10));
            totalWidth = resetWidth;
            for (var i = 0; i < numberOfBricks; i++) {
                var widthOfBrick = 0;
                
                widthOfBrick = Math.floor(random(40, totalWidth));
                
                var endRow = false;
                if(totalWidth - widthOfBrick <= 0){
                    totalWidth = widthOfBrick - totalWidth;
                    endRow = true;
                }
                else {
                    totalWidth -= widthOfBrick;
                }
                
                bricks.push({
                    isActive: true,
                    width: widthOfBrick,
                    row: j
                });
                 
                if(endRow) {
                    break;
                }
            }
        }
        return bricks;
    };
    
    this.pong = function(ball){
      
      for(var i = 0; i < this.bricks.length; i++){
          var x1 = this.bricks[i].x;
          var x2 = this.bricks[i].x + this.bricks[i].width;
          var y1 = this.bricks[i].y;
          var y2 = this.bricks[i].y + this.brickThickness;
          
           if(this.bricks[i].isActive &&(x1 <= ball.x && x2 >= ball.x) && (y1 <= ball.y && y2 >= ball.y)){
             this.bricks[i].isActive = false;
              ball.isPaddleOrBrickHit = true;
              console.log("PONG");
              break;
              
           }
      }  
    };
}