namex="";
pram1="";
pram2="";
setInterval(()=>{
    for (let index = 0; index < ig.game[players].betweenDefaultAndPlayer
.length; index++) {
    if (ig.game[players].betweenDefaultAndPlayer[index].givenName==namex) {
        ig.game[players].betweenDefaultAndPlayer[index].reactTo(pram1, pram2)
    }
}
}, 50)
