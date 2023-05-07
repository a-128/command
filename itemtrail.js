facingRight=Deobfuscator.keyBetween(EntityPortalr.prototype.check, ".", "))");
velx=60;
vely=60;
itemtrail=false;
setInterval(()=>{
    if (ig.input.state("click")&&itemtrail==true) {
        ig.game.attachmentManager.O4777(ig.game.player, "h", true, {opp: {x:Math.round(ig.game.screen.x+ig.input.mouse.x), y: Math.round(ig.game.screen.y+ig.input.mouse.y)}, opv: {x:ig.game.player[facingRight]?-velx:velx, y: vely}, tid: ig.game.player.O3263})
    }
}, 50)
