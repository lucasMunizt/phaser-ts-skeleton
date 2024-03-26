interface PlayerWithJump extends Phaser.Types.Physics.Arcade.SpriteWithDynamicBody {
    canjump: boolean;
}
export class Newscene extends Phaser.Scene{
    control: Phaser.Types.Input.Keyboard.CursorKeys;
    player: PlayerWithJump;
    platforms: Phaser.Physics.Arcade.StaticGroup;
    ladders: Phaser.Physics.Arcade.StaticGroup;
   
    constructor(){
        super('Newscene');
    }

    preload() {
        this.load.image('sky', './assets/map/mapcidade.jpg');
        //this.load.tilemapTiledJSON('map', './assets/map/map1.json');
        this.load.image('platform', './assets/character/industrialTile_81.png');
        this.load.image('ladder', './assets/character/ladder1.png');
        
        this.load.spritesheet('guy', './assets/character/guy.png',{frameWidth: 16, frameHeight: 25});
    }
  
    create() {
        let map = this.add.image(0,0,'sky').setOrigin(0,0);
       // map.displayWidth = 800;
        //map.displayHeight = 40;
        this.player = this.physics.add.sprite(50,500,'guy').setCollideWorldBounds(true).setScale(2) as PlayerWithJump;;
        this.player.canjump = true;
        this.player.setFrame(1)
        this.control = this.input.keyboard.createCursorKeys();  
        this.platforms = this.physics.add.staticGroup();
        this.ladders = this.physics.add.staticGroup();
        //plataforma superior 
        this.platforms.create(100,100,'platform').setScale(2).refreshBody();
        this.platforms.create(160,100,'platform').setScale(2).refreshBody();
        this.platforms.create(220,100,'platform').setScale(2).refreshBody();
       
        //escadas
        this.ladders.create(240,130,'ladder').setScale(1,2).refreshBody(); 


        //bloco chão aumenta o ponto x em 90 a parti de 50
        this.platforms.create(50,645,'platform').setScale(3).refreshBody();
        this.platforms.create(140,645,'platform').setScale(3).refreshBody();
        this.platforms.create(230,645,'platform').setScale(3).refreshBody();
        this.platforms.create(320,645,'platform').setScale(3).refreshBody();
        this.platforms.create(410,645,'platform').setScale(3).refreshBody();
        this.platforms.create(500,645,'platform').setScale(3).refreshBody();
        this.platforms.create(590,645,'platform').setScale(3).refreshBody();
        this.platforms.create(680,645,'platform').setScale(3).refreshBody();
        this.platforms.create(770,645,'platform').setScale(3).refreshBody();
        this.physics.add.collider(this.player, this.platforms);
    }
    
    update() {
        if (this.control.left.isDown) {
            this.player.setVelocityX(-150);
        }else if(this.control.right.isDown){
            this.player.setVelocityX(150);
        }else if (this.control.up.isDown && this.player.canjump ) {
            this.player.setVelocityY(-200);
            this.player.canjump = false;
        }else if(!this.control.up.isDown && !this.player.canjump){
            this.player.canjump = true;
        
        }
        else{
            this.player.setVelocityX(0);
        }
    }
  
}