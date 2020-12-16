let maxheight=window.screen.height;
let maxwidth=window.screen.width;

function perc(n,p) {
  return (n/100)*p;
}


function setup(){
  document.getElementById("logop").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("logotp").style.marginLeft=perc(maxwidth,15)+55+"px";

  document.getElementById("dot0").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("pt0").style.marginLeft=perc(maxwidth,15)+33+"px";

  document.getElementById("dot1").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("pt1").style.marginLeft=perc(maxwidth,15)+33+"px";

  document.getElementById("dot2").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("pt2").style.marginLeft=perc(maxwidth,15)+33+"px";

  document.getElementById("dot3").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("pt3").style.marginLeft=perc(maxwidth,15)+33+"px";


}
setup()
