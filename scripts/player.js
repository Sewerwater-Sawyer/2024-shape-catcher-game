//@ts-check
import { canvas, ctx } from "./common/canvas.js";

export class Player{
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;

        this.speed = 5;

        this.keyBindings = {
            up: "ArrowUp",
            down: "ArrowDown",
            left: "ArrowLeft",
            right: "ArrowRight",
        };

        this.moving = {
            up: false,
            down: false,
            left: false,
            right: false,
        };
        this.wireUpKeyBoard();
    }

    wireUpKeyBoard() {
        window.addEventListener("keydown", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = true;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = true;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = true;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = true;
                    break;
            }
        });


        window.addEventListener("keyup", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = false;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = false;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = false;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = false;
                    break;
            }
        });
    }


    update() {
        let dirX = 0;
        let dirY = 0;

        if(this.moving.up) {
            dirY = -1;
        }

        if(this.moving.down) {
            dirY = 1;
        }

        if(this.moving.up && this.moving.down) {
            dirY = 0;
        }

        if(this.moving.left) {
            dirX = -1;
        }

        if(this.moving.right) {
            dirX = 1;
        }

        if(this.moving.left && this.moving.right) {
            dirX = 0;
        }

        this.x += this.speed * dirX;
        this.y += this.speed * dirY;

        if (this.x < 0) {
            this.x = 0
        }

        if (this.y < 0) {
            this.y = 0
        } 

        if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width
        }

        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height
        }
    }

    draw() {
        ctx.fillStyle = "purple";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}



export class PlayerS{
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;

        this.speed = 5;

        this.keyBindings = {
            up: "KeyW",
            down: "KeyS",
            left: "KeyA",
            right: "KeyD",
        };

        this.moving = {
            up: false,
            down: false,
            left: false,
            right: false,
        };
        this.wireUpKeyBoard();
    }

    wireUpKeyBoard() {
        window.addEventListener("keydown", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = true;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = true;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = true;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = true;
                    break;
            }
        });


        window.addEventListener("keyup", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = false;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = false;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = false;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = false;
                    break;
            }
        });
    }


    update() {
        let dirX = 0;
        let dirY = 0;

        if(this.moving.up) {
            dirY = -1;
        }

        if(this.moving.down) {
            dirY = 1;
        }

        if(this.moving.up && this.moving.down) {
            dirY = 0;
        }

        if(this.moving.left) {
            dirX = -1;
        }

        if(this.moving.right) {
            dirX = 1;
        }

        if(this.moving.left && this.moving.right) {
            dirX = 0;
        }

        this.x += this.speed * dirX;
        this.y += this.speed * dirY;

        if (this.x < 0) {
            this.x = 0
        }

        if (this.y < 0) {
            this.y = 0
        } 

        if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width
        }

        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height
        }
    }

    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


export class PlayerP{
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;

        this.speed = 5;

        this.keyBindings = {
            up: "KeyI",
            down: "KeyK",
            left: "KeyJ",
            right: "KeyL",
        };

        this.moving = {
            up: false,
            down: false,
            left: false,
            right: false,
        };
        this.wireUpKeyBoard();
    }

    wireUpKeyBoard() {
        window.addEventListener("keydown", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = true;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = true;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = true;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = true;
                    break;
            }
        });


        window.addEventListener("keyup", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = false;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = false;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = false;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = false;
                    break;
            }
        });
    }


    update() {
        let dirX = 0;
        let dirY = 0;

        if(this.moving.up) {
            dirY = -1;
        }

        if(this.moving.down) {
            dirY = 1;
        }

        if(this.moving.up && this.moving.down) {
            dirY = 0;
        }

        if(this.moving.left) {
            dirX = -1;
        }

        if(this.moving.right) {
            dirX = 1;
        }

        if(this.moving.left && this.moving.right) {
            dirX = 0;
        }

        this.x += this.speed * dirX;
        this.y += this.speed * dirY;

        if (this.x < 0) {
            this.x = 0
        }

        if (this.y < 0) {
            this.y = 0
        } 

        if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width
        }

        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height
        }
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


export class PlayerX{
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;

        this.speed = 5;

        this.keyBindings = {
            up: "KeyC",
            down: "KeyV",
            left: "KeyB",
            right: "KeyN",
        };

        this.moving = {
            up: false,
            down: false,
            left: false,
            right: false,
        };
        this.wireUpKeyBoard();
    }

    wireUpKeyBoard() {
        window.addEventListener("keydown", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = true;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = true;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = true;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = true;
                    break;
            }
        });


        window.addEventListener("keyup", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = false;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = false;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = false;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = false;
                    break;
            }
        });
    }


    update() {
        let dirX = 0;
        let dirY = 0;

        if(this.moving.up) {
            dirY = -1;
        }

        if(this.moving.down) {
            dirY = 1;
        }

        if(this.moving.up && this.moving.down) {
            dirY = 0;
        }

        if(this.moving.left) {
            dirX = -1;
        }

        if(this.moving.right) {
            dirX = 1;
        }

        if(this.moving.left && this.moving.right) {
            dirX = 0;
        }

        this.x += this.speed * dirX;
        this.y += this.speed * dirY;

        if (this.x < 0) {
            this.x = 0
        }

        if (this.y < 0) {
            this.y = 0
        } 

        if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width
        }

        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height
        }
    }

    draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}


export class PlayerF{
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;

        this.speed = 5;

        this.keyBindings = {
            up: "KeyV",
            down: "KeyB",
            left: "KeyC",
            right: "KeyN",
        };

        this.moving = {
            up: false,
            down: false,
            left: false,
            right: false,
        };
        this.wireUpKeyBoard();
    }

    wireUpKeyBoard() {
        window.addEventListener("keydown", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = true;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = true;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = true;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = true;
                    break;
            }
        });


        window.addEventListener("keyup", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = false;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = false;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = false;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = false;
                    break;
            }
        });
    }


    update() {
        let dirX = 0;
        let dirY = 0;

        if(this.moving.up) {
            dirY = -1;
        }

        if(this.moving.down) {
            dirY = 1;
        }

        if(this.moving.up && this.moving.down) {
            dirY = 0;
        }

        if(this.moving.left) {
            dirX = -1;
        }

        if(this.moving.right) {
            dirX = 1;
        }

        if(this.moving.left && this.moving.right) {
            dirX = 0;
        }

        this.x += this.speed * dirX;
        this.y += this.speed * dirY;

        if (this.x < 0) {
            this.x = 0
        }

        if (this.y < 0) {
            this.y = 0
        } 

        if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width
        }

        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height
        }
    }

    draw() {
        ctx.fillStyle = "pink";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export class PlayerG {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;

        this.speed = 5;

        this.keyBindings = {
            up: "KeyT",
            down: "KeyG",
            left: "KeyF",
            right: "KeyH",
        };

        this.moving = {
            up: false,
            down: false,
            left: false,
            right: false,
        };
        this.wireUpKeyBoard();
    }

    wireUpKeyBoard() {
        window.addEventListener("keydown", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = true;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = true;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = true;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = true;
                    break;
            }
        });


        window.addEventListener("keyup", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = false;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = false;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = false;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = false;
                    break;
            }
        });
    }


    update() {
        let dirX = 0;
        let dirY = 0;

        if(this.moving.up) {
            dirY = -1;
        }

        if(this.moving.down) {
            dirY = 1;
        }

        if(this.moving.up && this.moving.down) {
            dirY = 0;
        }

        if(this.moving.left) {
            dirX = -1;
        }

        if(this.moving.right) {
            dirX = 1;
        }

        if(this.moving.left && this.moving.right) {
            dirX = 0;
        }

        this.x += this.speed * dirX;
        this.y += this.speed * dirY;

        if (this.x < 0) {
            this.x = 0
        }

        if (this.y < 0) {
            this.y = 0
        } 

        if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width
        }

        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height
        }
    }

    draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}




export class PlayerQ{
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;

        this.speed = 5;

        this.keyBindings = {
            up: "KeyR",
            down: "KeyY",
            left: "KeyE",
            right: "KeyU",
        };

        this.moving = {
            up: false,
            down: false,
            left: false,
            right: false,
        };
        this.wireUpKeyBoard();
    }

    wireUpKeyBoard() {
        window.addEventListener("keydown", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = true;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = true;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = true;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = true;
                    break;
            }
        });


        window.addEventListener("keyup", (e) => {
            //console.log(e);
            switch(e.code) {
                case this.keyBindings.up: 
                    this.moving.up = false;
                    break;

                case this.keyBindings.down: 
                    this.moving.down = false;
                    break;

                case this.keyBindings.left: 
                    this.moving.left = false;
                    break;

                case this.keyBindings.right: 
                    this.moving.right = false;
                    break;
            }
        });
    }


    update() {
        let dirX = 0;
        let dirY = 0;

        if(this.moving.up) {
            dirY = -1;
        }

        if(this.moving.down) {
            dirY = 1;
        }

        if(this.moving.up && this.moving.down) {
            dirY = 0;
        }

        if(this.moving.left) {
            dirX = -1;
        }

        if(this.moving.right) {
            dirX = 1;
        }

        if(this.moving.left && this.moving.right) {
            dirX = 0;
        }

        this.x += this.speed * dirX;
        this.y += this.speed * dirY;

        if (this.x < 0) {
            this.x = 0
        }

        if (this.y < 0) {
            this.y = 0
        } 

        if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width
        }

        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height
        }
    }

    draw() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}