<!--



function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
// -->

function MM_showHideLayers() { //v3.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v; }
    obj.visibility=v; }
}
//메일보내기
function sendMail(To)
{
	window.open("http://www.hotpcbang.co.kr/html/mail.php?To="+To,"","scrollbars=no,left=150,top=150,width=380,height=483");
}

function picture(opt) {
		document.img.src=opt;
	}

function zoom(File,Width,Height)
{
	if(!Width || !Height){
		alert("이미지가 존재하지 않거나 이미지 크기정보가 올바르지 않습니다.");
	}else{
		window.open("zoom.php?idx="+File,"","scrollbars=no,width="+Width+",height="+Height+",top=50,left=50");
	}
}
//즐겨찾기 추가
function bookmark() {
window.external.AddFavorite('http://www.leesdesign.co.kr', '리스디자인 ▒고품격 홈페이지,쇼핑몰제작 전문▒');
}



function openflash(width,height,src){ 
    return "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" width="+width+" height="+height+"><param name=movie value="+src+"><param name=quality value=high ><embed src="+src+" quality=high  pluginspage=\"http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\" type=\"application/x-shockwave-flash\" width="+width+" height="+height+"></embed></object>"; 
} 

document.write("<style type=\"text/css\">object, embed {display:none}</style>");

window.attachEvent('onload', function() 
{ 
    var objs = document.all.tags('OBJECT'); 
    var embs = document.all.tags('EMBED'); 
    for (var i=0,cnt=objs.length; i<cnt; i++) 
	{
        objs[i].outerHTML = objs[i].outerHTML; 
		objs[i].style.display = 'block';
	}
    for (var i=0,cnt=embs.length; i<cnt; i++) 
	{
        embs[i].outerHTML = embs[i].outerHTML; 
		embs[i].style.display = 'block';
	}
}); 

function imgview(src)
{
	if (!src) src = this.src;
	window.open('imgview.php?src='+escape(src),'','width=1,height=1');
}




//-->