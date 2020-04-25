function FlashMainbody(Ftrans,wid,hei) {
	mainbody = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='"+ wid +"' height='"+ hei +"'>";
	mainbody += "<param name='movie' value='"+ Ftrans +"'>";
	mainbody += "<param name='quality' value='high'>";
	mainbody += "<param name='wmode' value='transparent'>";
	mainbody += "<param name='menu' value='false'>";
	mainbody += "<embed src='"+ Ftrans +"' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='"+ wid +"' height='"+ hei +"'></embed>"
	mainbody += "</object>";

	//document.body.innerHTML = mainbody;
	document.write(mainbody);
	return;
}