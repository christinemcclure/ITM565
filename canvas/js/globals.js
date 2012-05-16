	WIDTH = 800;
	HEIGHT = 600;
	RECTWIDTH = 160;
	RECTHEIGHT = 65;
	RECTROUND = 5;
	TEXTLINE1 = 130;
	TEXTPUSH = 80;
	CENTERRECTY = 400;
	RECTLARGEWIDTH = 500;
	RECTLARGEHEIGHT = 300;
	DETAILTEXT1 = 360;
	DETAILTEXTPUSH = 350;

	var btn, btnText, dupeR, detailT;
	
	appear = Raphael.animation({	
		'stroke-opacity':1,
		'fill-opacity':1
	}, 1000);	

	headerFiller = {
		'font-family': 'verdana,helvetica,san-serif',
		'font-size':'26px'		
	}
	
	
	rectAttr = {
		cursor:'pointer',
		fill:'90-#fff-#ccc'
	}
	
	btnAttr = {
		cursor:'pointer',
		fill:'red',
		'stroke-opacity':0,
		'fill-opacity':0
	}
	
	btnTxtAttr =  {
		'font-family': 'verdana,helvetica,san-serif',
		'font-size':'16px',
		'font-weight':900,
		cursor:'pointer',
		fill:'#fff',
		'fill-opacity':0		
	}
	
	textAttr = {
		'font-family': 'verdana,helvetica,san-serif',
		'font-size':'18px',
		cursor:'pointer',
		fill:'#333333'
	}
	
	detailTextAttr = {
		'font-family': 'verdana,helvetica,san-serif',
		'font-size':'28px',
		fill:'#333333',
		'fill-opacity':0 // start with invisible, then fade in with animate
	}
		
	emph ={
		fill:'red',
		'font-size':'20px'
	}

test = {
	fill:'green'
}
		
