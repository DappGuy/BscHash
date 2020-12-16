let maxheight=window.screen.height;
let maxwidth=window.screen.width;

function perc(n,p) {
  return (n/100)*p;
}

function startup(){
  document.getElementById("logo").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("divwaiting").style.marginLeft=maxwidth-400+"px";
  document.getElementById("transactionconfirmed").style.marginLeft=maxwidth-400+"px";

  document.getElementById("logot").style.marginLeft=perc(maxwidth,15)+55+"px";
  document.getElementById("notice").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("newacc").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("deposit").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("withdraw").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("newaccselect").style.backgroundColor="#191919";
  document.getElementById("newaccselect").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("depositselect").style.marginLeft=perc(maxwidth,15)+230+"px";
  document.getElementById("withdrawselect").style.marginLeft=perc(maxwidth,15)+452+"px";
  document.getElementById("donations").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("donations").style.marginTop=maxheight-195+"px";

  document.getElementById("version").style.marginLeft=perc(maxwidth,15)+"px";
  document.getElementById("version").style.marginTop=maxheight-170+"px";

  document.getElementById("first").style.marginLeft=50+"px";
  document.getElementById("first").style.backgroundColor="#94FEBF";
  document.getElementById("sec").style.marginLeft=150+"px";
  document.getElementById("thr").style.marginLeft=260+"px";
  document.getElementById("four").style.marginLeft=370+"px";
  document.getElementById("firstt").style.marginLeft=30+"px";
  document.getElementById("sect").style.marginLeft=135+"px";
  document.getElementById("thrt").style.marginLeft=250+"px";
  document.getElementById("fourt").style.marginLeft=355+"px";


  document.getElementById("confirmnewaccheader").style.marginLeft=maxwidth-430+"px";
  document.getElementById("confirmnewacc").style.marginLeft=maxwidth-430+"px";

  document.getElementById("confirmwithdrawheader").style.marginLeft=maxwidth-430+"px";
  document.getElementById("confirmwithdrawal").style.marginLeft=maxwidth-430+"px";
  document.getElementById("alertnetwork").style.marginLeft=maxwidth-400+"px";


  document.getElementById("privacytips").style.marginLeft=maxwidth-150+"px";
  document.getElementById("howitworks").style.marginLeft=maxwidth-280+"px";
  document.getElementById("signals").style.marginLeft=maxwidth-350+"px";

}
startup();

function newaccf(){
  document.getElementById("newaccselect").style.backgroundColor="#191919";
  document.getElementById("depositselect").style.backgroundColor="#0C0C0C";
  document.getElementById("withdrawselect").style.backgroundColor="#0C0C0C";
  document.getElementById("newacc").style.display="block";
  document.getElementById("deposit").style.display="none";
  document.getElementById("withdraw").style.display="none";
}


function depositf(){
  document.getElementById("newaccselect").style.backgroundColor="#0C0C0C";
  document.getElementById("depositselect").style.backgroundColor="#191919";
  document.getElementById("withdrawselect").style.backgroundColor="#0C0C0C";
  document.getElementById("newacc").style.display="none";
  document.getElementById("deposit").style.display="block";
  document.getElementById("withdraw").style.display="none";
}


function withdrawf(){
  document.getElementById("newaccselect").style.backgroundColor="#0C0C0C";
  document.getElementById("depositselect").style.backgroundColor="#0C0C0C";
  document.getElementById("withdrawselect").style.backgroundColor="#191919";
  document.getElementById("newacc").style.display="none";
  document.getElementById("deposit").style.display="none";
  document.getElementById("withdraw").style.display="block";
}

function err(){
  document.getElementById("errorPrevent").style.display="block";
  document.getElementById("NoProvider").style.marginLeft=maxwidth/2-250+"px";
  document.getElementById("NoProvider").style.marginTop=maxheight/2-200+"px";

}
if(typeof ethereum=="undefined"){
  err()
}

function setsignal(){
  web3.eth.net.getId().then(netId => {
    switch (netId) {
      case 1:
        document.getElementById("signals").style.backgroundColor="#94FEBF";
        document.getElementById("alertnetwork").style.display="none";
        break

      default:
        document.getElementById("signals").style.backgroundColor="#A349A4";
        document.getElementById("alertnetwork").style.display="block";
    }
  })
}

setInterval(setsignal(), 3000);
