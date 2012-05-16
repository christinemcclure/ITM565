//outside code
	function sleep(ms)
	{
//		alert ('sleeping for ' + ms );
		var dt = new Date();
		dt.setTime(dt.getTime() + ms);
		while (new Date().getTime() < dt.getTime());
	}


function highlightT(item) {		
	item.attr(emph);
}


function rmvHighlightT(item) {		
	item.attr(textAttr);
}


function fadeOut(item){
		item.animate({
		cx: this.cx, 
		"stroke-width": this.cx / 100, 
		fill: 'red', 
		"fill-opacity": +!!(this.cx - 100)
		}, 500);
}

function fadeIn(item){
		item.animate({
		cx: this.cx, 
		"stroke-width": 1, 
		fill: '#333333', 
		"fill-opacity": 1
		}, 500);
}

function cleanUp(){
	if (btn) {btn.remove();}
	if (btnText){btnText.remove();}
	if (dupeR){dupeR.remove();}
	if (detailT){detailT.remove();}
}

function moveR(xPos) {
	dupeR = paper.rect (xPos, 100, RECTWIDTH, RECTHEIGHT, RECTROUND);
	dupeR.attr(rectAttr);
	dupeR.animate({
	x: (WIDTH-RECTLARGEWIDTH)/2, 
	y: 250,
	width: RECTLARGEWIDTH,
	height: RECTLARGEHEIGHT
	}, 1000);
}

function displayText (msg) {
		detailT = paper.text (400, DETAILTEXT1, msg); 
//		detailT.attr({text:msg});
		detailT.attr(detailTextAttr);
		detailT.animate(appear.delay(1000));
}
	
	
function createButton(linkTo){
	 btn = paper.rect((WIDTH-150)/2, 500, 150, 30, 10).click(function(){window.location=linkTo});
	 btn.attr(btnAttr);			
	 btn.animate(appear.delay(1000));	
	 btnText = paper.text(WIDTH/2, 514,'Take me there!').click(function(){window.location=linkTo});
	 btnText.attr(btnTxtAttr);
	 btnText.animate(appear.delay(1000));		 
}

// don't bother fixing for IE
function myClickFunction (item, link, msg ){
		cleanUp();
		var linkTo=link;
		fadeOut(item);
		moveR(20);
		displayText(msg);
		createButton(linkTo);
		fadeIn(item);	
}