facingRight=Deobfuscator.keyBetween(EntityPortalr.prototype.check, ".", "))")
throwItem=Deobfuscator.function(ig.game.attachmentManager, ",b==", true);
rhvelx=60
rhvely=60
rhsize=75
rhon=false
setInterval(()=>{
    if (rhon==true) {
ig.game.attachmentManager[throwItem](ig.game.player, "h", true, {opp: {x:ig.game.player.pos.x+(Math.round(Math.random()*rhsize)-(rhsize/2))-9.5, y: ig.game.player.pos.y+(Math.round(Math.random()*rhsize)-(rhsize/2))-9.5}, opv: {x:ig.game.player[facingRight]?-rhvelx:rhvelx, y: rhvely}, tid: ig.game.player.O3263})
    }
}, 50)
