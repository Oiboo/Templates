

/*  load game canvase size (w,h,render-er(canvas))   */
var game = new Phaser.Game(1500,1000,Phaser.AUTO);
/*Add gamestate */
game.state.add('state1', demo.state1);
game.state.add('state2', demo.state2);
game.state.start('state1');
