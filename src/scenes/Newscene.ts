interface PlayerWithJump extends Phaser.Types.Physics.Arcade.SpriteWithDynamicBody {
    canjump: boolean;
}
export class Newscene extends Phaser.Scene{
    control: Phaser.Types.Input.Keyboard.CursorKeys;
    player: PlayerWithJump;
    constructor(){
        super('Newscene');
    }

    preload() {
        this.load.image('sky', './assets/map/map1.png');
        this.load.tilemapTiledJSON('map', './assets/map/map1.json');
        this.load.spritesheet('guy', './assets/character/guy.png',{frameWidth: 32, frameHeight: 32});
    }
  
    create() {
        let map = this.add.image(0,0,'sky').setOrigin(0,0);
        map.displayWidth = 1300;
        map.displayHeight = 840;
        this.player = this.physics.add.sprite(50,500,'guy').setCollideWorldBounds(true).setScale(2) as PlayerWithJump;;
        this.player.canjump = true;
        this.control = this.input.keyboard.createCursorKeys();  
    
        
    }
    
    update() {
        if (this.control.left.isDown) {
            this.player.setVelocityX(-150);
        }else if(this.control.right.isDown){
            this.player.setVelocityX(150);
        }else if (this.control.up.isDown && this.player.canjump ) {//&& this.canjump
            this.player.setVelocityY(-200)
            this.player.canjump = false;
        }else if(!this.control.up.isDown && !this.player.canjump){
            this.player.canjump = true;
        }
        else{
            this.player.setVelocityX(0);
        }
    }
  
}