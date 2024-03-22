import guyImg from '@assets/character/guy.png';
export class Newscene extends Phaser.Scene{

    constructor(){
        super('Newscene');
    }


    preload() {
        this.load.image('sky', './assets/map/mapat.png');
        this.load.spritesheet('guy', './assets/character/guy.png',{frameWidth: 32, frameHeight: 32});
    }
  
    create() {
        let map = this.add.image(0,0,'sky').setOrigin(0,0);
        map.displayWidth = 800;
        map.displayHeight = 640;
        let player = this.physics.add.sprite(50,500,'guy');
        player.setCollideWorldBounds(true).setScale(2,2);
    }
  
  
}