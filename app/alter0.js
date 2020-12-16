let maxheightt=window.screen.height;
let maxwidthh=window.screen.width;

function perc(n,p) {
  return (n/100)*p;
}


function setuph(){
  document.getElementById("logoh").style.marginLeft=perc(maxwidthh,15)+"px";
  document.getElementById("logoth").style.marginLeft=perc(maxwidthh,15)+55+"px";

  document.getElementById("dott0").style.marginLeft=perc(maxwidthh,15)+"px";
  document.getElementById("how0").style.marginLeft=perc(maxwidthh,15)+33+"px";

  document.getElementById("dott1").style.marginLeft=perc(maxwidthh,15)+"px";
  document.getElementById("how1").style.marginLeft=perc(maxwidthh,15)+33+"px";

  document.getElementById("dott2").style.marginLeft=perc(maxwidthh,15)+"px";
  document.getElementById("how2").style.marginLeft=perc(maxwidthh,15)+33+"px";

  document.getElementById("dott3").style.marginLeft=perc(maxwidthh,15)+"px";
  document.getElementById("how3").style.marginLeft=perc(maxwidthh,15)+33+"px";

}
setuph()
