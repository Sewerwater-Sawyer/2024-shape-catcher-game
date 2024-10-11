//@ts-check

import { SimpleGoodItem } from "./collectables/good.js";
import { canvas } from "./common/canvas.js";
import { Player, PlayerF, PlayerG, PlayerP, PlayerQ, PlayerS, PlayerX } from "./player.js";

export class GameManager {
	constructor() {
		this.players = [];
		this.collectables = [];
		this.enemies = [];

		this.isGameOver = false;

        this.goodSpawn = {
            lastTime: 0,
            nextTime: 0,
            next: function() {
                this.lastTime = 0;
                this.nextTime = rand(2 * 1000, 6 * 1000);
            }
        };

        this.spawner(0);
	}

	initialize() {
		this.players = [];
		let p1 = new Player(canvas.width / 2, canvas.height / 2);
        p1.x -= p1.width / 2;
        p1.y -= p1.height / 2;
        
		this.players.push(p1);

        
        let p2 = new PlayerS (canvas.width / 2, canvas.height / 3);
        p2.x -= p2.width / 2;
        p2.y -= p2.height / 2;
        
		this.players.push(p2);


        let p3 = new PlayerP (canvas.width / 2, canvas.height / 5);
        p3.x -= p3.width / 2;
        p3.y -= p3.height / 2;
        
		this.players.push(p3);


        let p4 = new PlayerF (canvas.width / 2, canvas.height / 1.5);
        p4.x -= p4.width / 2;
        p4.y -= p4.height / 2;
        
		this.players.push(p4);


        let p5 = new PlayerG (canvas.width / 3, canvas.height / 1.5);
        p5.x -= p5.width / 2;
        p5.y -= p5.height / 2;
        
		this.players.push(p5);


        let p6 = new PlayerQ (canvas.width / 4, canvas.height / 2);
        p6.x -= p6.width / 2;
        p6.y -= p6.height / 2;
        
		this.players.push(p5);
	}

    update(elapsedTime) {
        this.spawner(elapsedTime);

        this.players.forEach(p => {
            p.update();
        })

        this.collectables.forEach(c => {
            c.update(elapsedTime);
        })
    }
    
    spawner(elapsedTime) {
        this.goodSpawn.lastTime += elapsedTime;
        if(this.goodSpawn.lastTime > this.goodSpawn.nextTime) {
            //spawn a good item
            const buffer = 50;
            const sx = rand(buffer, canvas.width - buffer);
            const sy = rand(buffer, canvas.height - buffer);
            const item = new SimpleGoodItem(sx, sy);
            this.collectables.push(item);
            //reset the spawn timer and get a new spawn timer
            this.goodSpawn.next();
            debugger;
        }
    }

    draw() {
        this.players.forEach(p => {
            p.draw();
        })

        this.collectables.forEach(c => {
            c.draw();
        })
    }
}

function rand(min, max) {
    let upper = max - min;
    let r = Math.floor(Math.random() * upper) + min;
    return r;
} 

//function squareCollision() {
//    if(
//        SimpleGoodItem.x + SimpleGoodItem.width >= Player.x&&
//        SimpleGoodItem.x <= Player.x + SimpleGoodItem&&
//        SimpleGoodItem.y + SimpleGoodItem.height >= Player.y&&
//        SimpleGoodItem.y <= Player.y + SimpleGoodItem.height
//    )
//return true;
//}