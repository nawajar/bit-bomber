import 'phaser';

export default class Bomber extends Phaser.Scene
{
     speed;
     stats;
     cursors;
     ship;
    constructor ()
    {
        super('bomber');
    }

    preload ()
    {
        this.load.image('sky', 'assets/sky.png');
    }

    create ()
    {
        var pixelWidth = 6;
        this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);
        this.add.image(400, 300, 'sky');
        var chick = [
            '...55.......',
            '.....5......',
            '...7888887..',
            '..788888887.',
            '..888088808.',
            '..888886666.',
            '..8888644444',
            '..8888645555',
            '888888644444',
            '88788776555.',
            '78788788876.',
            '56655677776.',
            '456777777654',
            '.4........4.'
        ];
    
        this.textures.generate('chick', { data: chick, pixelWidth: pixelWidth });
    
        this.ship = this.add.sprite(400, 500, 'chick').setDepth(1);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.speed = Phaser.Math.GetSpeed(300, 1);
    }

    update (time, delta)
    {
        if (this.cursors.left.isDown)
        {
            this.ship.x -= this.speed * delta;
        }
        else if (this.cursors.right.isDown)
        {
            this.ship.x += this.speed * delta;
        }
        else if (this.cursors.up.isDown)
        {
            this.ship.y -= this.speed * delta;
        }
        else if (this.cursors.down.isDown)
        {
            this.ship.y += this.speed * delta;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Bomber
};

const game = new Phaser.Game(config);
