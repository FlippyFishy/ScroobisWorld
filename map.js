export default class TileMap {
    constructor(tileSize) {
        this.tileSize = tileSize;
        this.leftWall = this.#image("leftWall.png");
        this.rightWall = this.#image("rightWall.png");
        this.topWall = this.#image("topWall.png");
    }

    #image(fileName){
const img = new Image();
img.src = `images/${fileName}`;
return img;

    }

    map = [
        [2,1,1,1,1,1,1,1,1,2],
        [4,0,0,0,0,0,0,0,0,3],
        [4,0,0,0,0,0,0,0,0,3],
        [4,0,0,0,0,0,0,0,0,3],
        [4,0,0,0,0,0,0,0,0,3],
        [4,0,0,0,0,0,0,0,0,3],
        [4,0,0,0,0,0,0,0,0,3],
        [4,0,0,0,0,0,0,0,0,3],
        [4,0,0,0,0,0,0,0,0,3],        
        [2,5,5,5,5,5,5,5,5,2],
    ];

    draw(canvas, ctx) {
        this.#setCanvasSize(canvas);
        this.#clearCanvas(canvas,ctx);
    }

    #drawMap(ctx){
        for(let row =0; row< this.map.length; row++) {
            for(let column =0; column < this.map[row].length; column++){
                const tile = this.map[row][column];
                let image = null;
                switch(tile){
                    case 1:
                        image - this.topWall;
                        break;
                }
                ctx.drawImage(image,column * this.tileSize, row * this.tileSize, theis.tileSize, this.tileSize);
            }
        }
    }

    #clearCanvas(canvas, ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    #setCanvasSize(canvas) {
        canvas.height = this.map.length * this,this.tileSize;
        canvas.height = this.map[0].length * this,this.tileSize;
    }
}