import 'phaser';

export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload ()
    {
        this.load.image('ball', 'assets/sprites/pangball.png');
    }

    create ()
    {
        this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

        //  Add in a stack of balls

        for (var i = 0; i < 64; i++)
        {
            var ball = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'ball');
            ball.setCircle(15);
            ball.setFriction(0.005);
            ball.setBounce(1);
        }
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Demo,
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: true
            
        }
    },
};

const game = new Phaser.Game(config);
