(function(){
  var fill=document.getElementById('fill'), now=document.getElementById('now');
  if(!fill||!now) return;
  function tick(){var h=document.documentElement,max=h.scrollHeight-h.clientHeight;
    var p=max>0?Math.min(1,Math.max(0,h.scrollTop/max)):0;var s=Math.round(p*420),m=Math.floor(s/60),r=s%60;
    fill.style.width=(p*100)+'%';now.textContent=(m<10?'0':'')+m+':'+(r<10?'0':'')+r;}
  addEventListener('scroll',tick,{passive:true});addEventListener('resize',tick);tick();
})();