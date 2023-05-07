pl1=Deobfuscator.object(ig.game, "addForumThreadAndFirstComment_P", true);
pl2=Deobfuscator.function(ig.game[pl1], "/j/u/p/", true);
map=Deobfuscator.object(ig.game,'queuePerformDelayMs',true);
editswit=true
setmap22=ig.game[map].setMap
eval("setmap23="+ig.game[map].setMap.toString().replaceAll("d||", "d&&"))
ig.game[pl1][pl2]=function() {};
setInterval(()=>{
if (ig.game[pl1][pl2].toString()=='function() {}') {
    ig.game.isEditorHere=editswit
};
editswit?ig.game[map].setMap=setmap23:ig.game[map].setMap=setmap22}, 0)
