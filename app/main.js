var deposit=0.01;
var password;
var hash;
var wdrhash;
var address;


ethereum.enable();
web3 = new Web3(web3.currentProvider);
var contract =new web3.eth.Contract([{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"bytes32","name":"_proof","type":"bytes32"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_proof","type":"bytes32"}],"name":"newAccount","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_value","type":"string"},{"internalType":"address","name":"_to","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
,"0x461CAbFcF740E7AB378ea3385aEc2db3e0F46109");


web3.eth.net.getId().then(netId => {
  switch (netId) {
    case 97:
      break

    default:
      alert('Change network to Testnet.')
  }
})







 function newAccountConnect(){
   document.getElementById("newaccvalue").value="";
   document.getElementById("confirmnewaccheader").style.display="none";
   document.getElementById("confirmnewacc").style.display="none";
   document.getElementById("MetaMaskAlert").style.display="block";
   document.getElementById("arrow").style.display="block";
   document.getElementById("MetaMaskAlert").style.marginLeft=maxwidth-250+"px";
   document.getElementById("arrow").style.marginLeft=maxwidth-250+90+"px";
   window.setTimeout(function(){ document.getElementById("MetaMaskAlert").style.display="none";
    document.getElementById("arrow").style.display="none";}, 4000);

    window.setTimeout(function(){document.getElementById("divwaiting").style.display="block";},17000)








contract.methods.newAccount("0x"+hash).send({from: web3.givenProvider.selectedAddress,value: deposit*1000000000000000000})
.then(function(receipt){
    document.getElementById("divwaiting").style.display="none";
    document.getElementById("transactionconfirmed").style.display="block";
    window.setTimeout(function(){document.getElementById("transactionconfirmed").style.display="none";},15000);

})
}


function withdrawalConfirmed(){
  document.getElementById("withdrawv").value="";
  document.getElementById("withdrawav").value="";

  document.getElementById("confirmwithdrawheader").style.display="none";
  document.getElementById("confirmwithdrawal").style.display="none";
  document.getElementById("MetaMaskAlert").style.display="block";
  document.getElementById("arrow").style.display="block";
  document.getElementById("MetaMaskAlert").style.marginLeft=maxwidth-250+"px";
  document.getElementById("arrow").style.marginLeft=maxwidth-250+90+"px";
  window.setTimeout(function(){ document.getElementById("MetaMaskAlert").style.display="none";
   document.getElementById("arrow").style.display="none";}, 4000);
   window.setTimeout(function(){document.getElementById("divwaiting").style.display="block";},17000)

   contract.methods.withdraw(wdrhash,address).send({from: web3.givenProvider.selectedAddress})
   .then(function(receipt){
     document.getElementById("divwaiting").style.display="none";
     document.getElementById("transactionconfirmed").style.display="block";
     window.setTimeout(function(){document.getElementById("transactionconfirmed").style.display="none";},15000);
      })
}
















function depositeth(){
  let ethfordep=document.getElementById("depositamount").value;
  let dephash=document.getElementById("deposittov").value;

  document.getElementById("MetaMaskAlert").style.display="block";
  document.getElementById("arrow").style.display="block";
  document.getElementById("MetaMaskAlert").style.marginLeft=maxwidth-250+"px";
  document.getElementById("arrow").style.marginLeft=maxwidth-250+90+"px";
  window.setTimeout(function(){ document.getElementById("MetaMaskAlert").style.display="none";
   document.getElementById("arrow").style.display="none";}, 4000);
   window.setTimeout(function(){document.getElementById("divwaiting").style.display="block";},17000)

   contract.methods.deposit(dephash).send({from: web3.givenProvider.selectedAddress,value: ethfordep*1000000000000000000})
   .then(function(receipt){
     document.getElementById("divwaiting").style.display="none";
     document.getElementById("transactionconfirmed").style.display="block";
     window.setTimeout(function(){document.getElementById("transactionconfirmed").style.display="none";},15000);
   })
}






















function SHA256(s){
 var chrsz  = 8;
 var hexcase = 0;
 function safe_add (x, y) {
 var lsw = (x & 0xFFFF) + (y & 0xFFFF);
 var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
 return (msw << 16) | (lsw & 0xFFFF);
 }
 function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
 function R (X, n) { return ( X >>> n ); }
 function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
 function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
 function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
 function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
 function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
 function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
 function core_sha256 (m, l) {
 var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
 var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
 var W = new Array(64);
 var a, b, c, d, e, f, g, h, i, j;
 var T1, T2;
 m[l >> 5] |= 0x80 << (24 - l % 32);
 m[((l + 64 >> 9) << 4) + 15] = l;
 for ( var i = 0; i<m.length; i+=16 ) {
 a = HASH[0];
 b = HASH[1];
 c = HASH[2];
 d = HASH[3];
 e = HASH[4];
 f = HASH[5];
 g = HASH[6];
 h = HASH[7];
 for ( var j = 0; j<64; j++) {
 if (j < 16) W[j] = m[j + i];
 else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
 T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
 T2 = safe_add(Sigma0256(a), Maj(a, b, c));
 h = g;
 g = f;
 f = e;
 e = safe_add(d, T1);
 d = c;
 c = b;
 b = a;
 a = safe_add(T1, T2);
 }
 HASH[0] = safe_add(a, HASH[0]);
 HASH[1] = safe_add(b, HASH[1]);
 HASH[2] = safe_add(c, HASH[2]);
 HASH[3] = safe_add(d, HASH[3]);
 HASH[4] = safe_add(e, HASH[4]);
 HASH[5] = safe_add(f, HASH[5]);
 HASH[6] = safe_add(g, HASH[6]);
 HASH[7] = safe_add(h, HASH[7]);
 }
 return HASH;
 }
 function str2binb (str) {
 var bin = Array();
 var mask = (1 << chrsz) - 1;
 for(var i = 0; i < str.length * chrsz; i += chrsz) {
 bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
 }
 return bin;
 }
 function Utf8Encode(string) {
 string = string.replace(/\r\n/g,"\n");
 var utftext = "";
 for (var n = 0; n < string.length; n++) {
 var c = string.charCodeAt(n);
 if (c < 128) {
 utftext += String.fromCharCode(c);
 }
 else if((c > 127) && (c < 2048)) {
 utftext += String.fromCharCode((c >> 6) | 192);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 else {
 utftext += String.fromCharCode((c >> 12) | 224);
 utftext += String.fromCharCode(((c >> 6) & 63) | 128);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 }
 return utftext;
 }
 function binb2hex (binarray) {
 var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
 var str = "";
 for(var i = 0; i < binarray.length * 4; i++) {
 str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
 hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8 )) & 0xF);
 }
 return str;
 }
 s = Utf8Encode(s);
 return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}


function deposit001(){
  document.getElementById("first").style.backgroundColor="#94FEBF";
  document.getElementById("sec").style.backgroundColor="#0C0C0C";
  document.getElementById("thr").style.backgroundColor="#0C0C0C";
  document.getElementById("four").style.backgroundColor="#0C0C0C";
  deposit=0.01;
}

function deposit01() {
  document.getElementById("first").style.backgroundColor="#0C0C0C";
  document.getElementById("sec").style.backgroundColor="#94FEBF";
  document.getElementById("thr").style.backgroundColor="#0C0C0C";
  document.getElementById("four").style.backgroundColor="#0C0C0C";
  deposit=0.1;
}
function deposit1() {
  document.getElementById("first").style.backgroundColor="#0C0C0C";
  document.getElementById("sec").style.backgroundColor="#0C0C0C";
  document.getElementById("thr").style.backgroundColor="#94FEBF";
  document.getElementById("four").style.backgroundColor="#0C0C0C";
  deposit=1;
}
function deposit10() {
  document.getElementById("first").style.backgroundColor="#0C0C0C";
  document.getElementById("sec").style.backgroundColor="#0C0C0C";
  document.getElementById("thr").style.backgroundColor="#0C0C0C";
  document.getElementById("four").style.backgroundColor="#94FEBF";
  deposit=10;
}
function onhalf(e){
  return e.slice(0,41)+"<br>"+e.slice(41,e.length);
}


function CreateNewAccount(){
  let getValue=document.getElementById("newaccvalue").value;
  //let getValue=document.getElementById("newaccvalue").value;

  if(getValue.length>=10){
    let finalHash;
    password=getValue;
    finalHash=SHA256(SHA256(getValue));
    let q=finalHash;
    document.getElementById("text3").innerHTML=password;
    document.getElementById("text5").innerHTML="0x"+onhalf(q);
    document.getElementById("confirmnewaccheader").style.display="block";
    document.getElementById("confirmnewacc").style.display="block";


    document.getElementById("confirmwithdrawheader").style.display="none";
    document.getElementById("confirmwithdrawal").style.display="none";
    hash=finalHash;
  }else {
    //add alert message
    console.log(3);
  }
}



function reject(){
  document.getElementById("newaccvalue").value="";
  document.getElementById("confirmnewaccheader").style.display="none";
  document.getElementById("confirmnewacc").style.display="none";
}

function rejecwith(){
  document.getElementById("withdrawv").value="";
  document.getElementById("withdrawav").value="";

  document.getElementById("confirmwithdrawheader").style.display="none";
  document.getElementById("confirmwithdrawal").style.display="none";
}




function withdrawalonclick(){
  let usepassword=  document.getElementById("withdrawv").value;
  let useaddress=  document.getElementById("withdrawav").value;
  wdrhash = SHA256(usepassword);
  address=useaddress;
  document.getElementById("text33").innerHTML=address;
  document.getElementById("confirmwithdrawheader").style.display="block";
  document.getElementById("confirmwithdrawal").style.display="block";

  document.getElementById("confirmnewaccheader").style.display="none";
  document.getElementById("confirmnewacc").style.display="none";
}






function CheckSpace(event){
   if(event.which ==32){
      event.preventDefault();
      return false;
   }
}
