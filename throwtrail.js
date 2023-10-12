facingRight=Deobfuscator.keyBetween(EntityPortalr.prototype.check, ".", "))");
throwItem=Deobfuscator.function(ig.game.attachmentManager, ",b==", true);
velx=60;
vely=60;
itemtrail=false;
setInterval(()=>{
    if (ig.input.state("click")&&itemtrail==true) {
        ig.game.attachmentManager[throwItem](ig.game.player, "h", true, {opp: {x:Math.round(ig.game.screen.x+ig.input.mouse.x), y: Math.round(ig.game.screen.y+ig.input.mouse.y)}, opv: {x:ig.game.player[facingRight]?-velx:velx, y: vely}, tid: ig.game.player[Deobfuscator.keyBetween(AimableManager.prototype.shoot, "c.tid=a.", "++;")]})
    }
}, 50)
