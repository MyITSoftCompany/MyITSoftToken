import React from "react";

function Canvas () {

    const canvas = document.getElementById("canvas")
    const context = canvas.getContext("2d");


    class Personage {
        constructor(x, y, width, height) {
          this._x = x;
          this._y = y;
          this._width = width;
          this._height = height;
      
          this._speed = 1;
          this._xDelta = 0;
          this._yDelta = 0;
          
          this._img = document.createElement("img");
          this._img.src = ""
        }
        getBoundingBox() {
          return {
            x: this._x,
            y: this._y,
            width: this._width,
            height: this._height
          };
        }
        update() {
          this._x += this._xDelta;
          this._y += this._yDelta;
        }
        render() {
          context.drawImage(this._img, this._x, this._y, this._width, this._height);
        }
        goRight() {
          this._xDelta = this._speed;
        }
        goLeft() {
          this._xDelta = this._speed * -1;
        }
        stop() {
          this._xDelta = 0;
        }
      }

      let data = {
        hero: new Hero(10, 140, 100, 100),
        bullets: [],
        rabbits: []
      };
      
      function render() {
        context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
      // 
        data.hero.render();
        data.bullets.forEach((bullet) => bullet.render());
        data.rabbits.forEach((rabbit) => rabbit.render());

      function loop() {
        requestAnimationFrame(loop);
        update();
        render();
      }
    }
      
    loop();
    return(
        <canvas id="canvas">
            {Personage()}
        </canvas>
    )
}
export default Canvas ;