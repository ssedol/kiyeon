var isDOM = (document.getElementById ? true : false); 
var isIE4 = ((document.all && !isDOM) ? true : false);
var isNS4 = (document.layers ? true : false);
function getRef(id) {
	if (isDOM) return document.getElementById(id);
	if (isIE4) return document.all[id];
	if (isNS4) return document.layers[id];
}
var isNS = navigator.appName == "Netscape";
function moveRightEdge() {
	var yMenuFrom, yMenuTo, yOffset, timeoutNextCheck;
	if (isNS4) {
		yMenuFrom   = divMenu.top;
		yMenuTo     = windows.pageYOffset + 0;   // 위쪽 위치
	} else if (isDOM) {
		yMenuFrom   = parseInt (divMenu.style.top, 10);
		yMenuTo     = (isNS ? window.pageYOffset : document.body.scrollTop) + 0; // 위쪽 위치
		if(yMenuTo >158)
			yMenuTo-=158;
		else yMenuTo=0;
	}
	timeoutNextCheck = 500;
	if (yMenuFrom != yMenuTo) {
		yOffset = Math.ceil(Math.abs(yMenuTo - yMenuFrom) / 20);
		if (yMenuTo < yMenuFrom)
			yOffset = -yOffset;
		if (isNS4)
			divMenu.top += yOffset;
		else if (isDOM)
			divMenu.style.top = parseInt (divMenu.style.top, 10) + yOffset;
			timeoutNextCheck = 10;
	}
	setTimeout ("moveRightEdge()", timeoutNextCheck);
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

// form.reset
function formClear(Obj)
{
	Obj.reset();
}

//객체 활성,비활성 설정 함수
function showObject(Obj,Boolen)
{
	if(Boolen){					//활성화
		Obj.disabled = false;
		Obj.style.background = "#ffffff";
	}
	else{						//비활성화
		Obj.disabled = true;
		Obj.style.background = "#dddddd";
	}
}
//객체 활성,비활성 설정 함수
function checkshowObject(Obj,Boolen)
{
	Boolen ? Obj.disabled = false: Obj.disabled = true;
}

/* 배열 처리 함수 */
//추가
function addArray(Obj,Val)
{
	var arrLength= Obj.length;
	Obj[arrLength] = Val;
}

//삭제
function delArray(Obj,Index)
{
	var temp=new Array();
	var nextIndex = Index +1;

	for(i=0,j=0;i<Obj.length;i++){
		if(i!=Index){
			temp[j] = Obj[i];
			j++;
		}
	}
	for(i=0;i<temp.length;i++)
		Obj[i]=temp[i];
	return temp.length;
}

//정렬   0:내림차순  1:오름차순
function sortArray(Obj,Method)
{
	Obj.sort();
	if(!Method)
		Obj.reverse();
}

//한글체크
function hanCheck(Str) {
	var Re=false;
	for(i=0;i<Str.length;i++){
		var a=Str.charCodeAt(i);
		if (a > 128) {
			Re=true;
		}
	}
	return Re;
}

//숫자체크
function numCheck(Str)
{
    var Re=true;
	for(i=0;i<Str.length;i++){
		var a=Str.charCodeAt(i);
		if(a<48 || a>57)
			Re=false;
	}
	return Re;		
}

//연락처체크
function telCheck(Tel1, Tel2, Tel3){
	var Re=true;
	if(!numCheck(Tel1) ||!numCheck(Tel2) ||!numCheck(Tel3) )
		Re = false;
	else if(Tel1.length <2 || Tel1.length >3)
		Re = false;
	else if(Tel2.length <3 || Tel2.length >4)
		Re = false;
	else if(Tel3.length <4 || Tel3.length >4)
		Re = false;
	return Re;
}

//이미지확대
function zoom(File,Width,Height)
{
	if(!Width || !Height){
		alert("이미지가 존재하지 않거나 이미지 크기정보가 올바르지 않습니다.");
	}else{
		window.open("zoom.php?img="+File,"","scrollbars=no,width="+Width+",height="+Height+",top=200,left=200");
	}
}

//이미지확대 (타이틀)
function zoomTitle(File,Width,Height,Title)
{
	if(!Width || !Height){
		alert("이미지가 존재하지 않거나 이미지 크기정보가 올바르지 않습니다.");
	}else{
		window.open("zoom.php?img="+File+"&title="+Title,"","scrollbars=no,width="+Width+",height="+Height+",top=200,left=200");
	}
}

//<tr> 배경색 바꾸기
function bgcolorChange(Obj,Color)
{
	Obj.backgroundColor = Color;
}

//주민등록번호 체크
function bsshChek(str_jumin1,str_jumin2)
{
	var i3=0;
	var re_value=true;
    for (var i=0;i<str_jumin1.length;i++)
    {
		var ch1 = str_jumin1.substring(i,i+1);
        if (ch1<'0' || ch1>'9') { i3=i3+1 }
    }
    if ((str_jumin1 == '') || ( i3 != 0 ))
		re_value=false;
	
    var i4=0;
    for (var i=0;i<str_jumin2.length;i++)
    {
		var ch1 = str_jumin2.substring(i,i+1);
        if (ch1<'0' || ch1>'9') { i4=i4+1 }
    }
	if ((str_jumin2 == '') || ( i4 != 0 ))
		re_value=false;
    if(str_jumin1.substring(0,1) < 4)
		re_value=false;
    if(str_jumin2.substring(0,1) > 2)
		re_value=false;
    if((str_jumin1.length > 7) || (str_jumin2.length > 8))
		re_value=false;
    if ((str_jumin1 == '72') || ( str_jumin2 == '18'))
		re_value=false;
                
    var f1=str_jumin1.substring(0,1)
    var f2=str_jumin1.substring(1,2)
    var f3=str_jumin1.substring(2,3)
    var f4=str_jumin1.substring(3,4)
    var f5=str_jumin1.substring(4,5)
    var f6=str_jumin1.substring(5,6)
    var hap=f1*2+f2*3+f3*4+f4*5+f5*6+f6*7
    var l1=str_jumin2.substring(0,1)
    var l2=str_jumin2.substring(1,2)
    var l3=str_jumin2.substring(2,3)
    var l4=str_jumin2.substring(3,4)
    var l5=str_jumin2.substring(4,5)
    var l6=str_jumin2.substring(5,6)
    var l7=str_jumin2.substring(6,7)
    hap=hap+l1*8+l2*9+l3*2+l4*3+l5*4+l6*5;
    hap=hap%11;
    hap=11-hap;
    hap=hap%10;

	if (hap != l7) 
		re_value=false;
    var i9=0;

	return re_value;
}

//만나이 체크
function manChek(ssh1)
{
	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth()+1;
	var year = today.getYear();

	ssh=year*10000+month*100+day;
	ssh=ssh-ssh1-19000000;
	return ssh;
}

//이메일체크
function isEmail(str) {
  var supported = 0;
  if (window.RegExp) {
    var tempStr = "a";
    var tempReg = new RegExp(tempStr);
    if (tempReg.test(tempStr)) supported = 1;
  }
  if (!supported) 
    return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
  var r1 = new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");
  var r2 = new RegExp("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");
  return (!r1.test(str) && r2.test(str));
}

//상품 선택
function selectGoods(Obj)
{
	Action="goods_select.php?Obj="+Obj;
	window.open(Action,"","scrollbars=yes,width=500,height=670,top=100,left=150");
}

//쿠키저장
function setCookie( name, value, expiredays )
{
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
	//document.cookie = name + "=" + escape( value ) + "; path=/;";
}

//칼러 박스
//       setColor(string mul|sin, string bg|style  string  id)
function setColor(Part1,Part2,Obj)
{
	window.open("color.php?part1="+Part1+"&part2="+Part2+"&target="+Obj,"","scrollbars=yes,width=350,height=110,left=300,top=300");
}

//1차카테고리 마우스 아웃 설정
function layerImgOut(Name,Src)
{
	Name.src=Src;
}

//상품 검색 폼
function goodsSearchSendit(Obj)
{
	if(Obj.searchstring.value==""){
		alert("검색어를 입력해 주십시오.");
		Obj.searchstring.focus();
	}else if(Obj.search.selectedIndex==1 && !numCheck(Obj.searchstring.value)){
		alert("가격 설정이 올바르지 않습니다.");
		Obj.searchstring.focus();
	}else{
		Obj.submit();
	}
}

//도움말 출력
function helpShow(Url,Width,Height)
{
	window.open("help.php?url="+Url,"","scrollbars=yes,width="+Width+",height="+Height+",left=100,top=100");
}
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
