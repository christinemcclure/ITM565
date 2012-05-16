function init() {	
			paper = Raphael('canvasSVG', WIDTH, HEIGHT);
//			sleep(3000);
 			background = paper.rect(0,0, WIDTH, HEIGHT);
			// sets allows you to set the same props for multiple items
			rectangle = paper.set();
			text = paper.set();
						
			header = paper.text (WIDTH/2, 50, 'I am looking for...');
			header.attr(headerFiller);
			
			background.attr({fill: "#EDEDED"});
			
			rectangle.push ( 
					articleR=paper.rect (20, 100, RECTWIDTH, RECTHEIGHT, RECTROUND),
					journalR=paper.rect (210, 100, RECTWIDTH, RECTHEIGHT, RECTROUND),
					researchR=paper.rect (400, 100, RECTWIDTH, RECTHEIGHT, RECTROUND),
					helpR=paper.rect (590, 100, RECTWIDTH, RECTHEIGHT, RECTROUND)				
			);
			rectangle.attr(rectAttr);//set all attributes at once for rectangles

			articleBBox = articleR.getBBox();//get bounding box of outer rectangles
			journalBBox = journalR.getBBox();
			researchBBox = researchR.getBBox();
			helpBBox = helpR.getBBox();
			
			articleR.node.id='articleB';
			
			text.push (
					articleT=paper.text ((articleBBox.x+TEXTPUSH), TEXTLINE1, 'A specific\njournal article'),
					journalT=paper.text ((journalBBox.x+TEXTPUSH), TEXTLINE1, 'Articles from a\nspecific journal'),
					researchT=paper.text ((researchBBox.x+TEXTPUSH), TEXTLINE1, 'Research on a\nparticular topic'),
					helpT=paper.text ((helpBBox.x+TEXTPUSH), TEXTLINE1, 'I\'m not sure\nwhat I need')			
			);
			
			text.attr(textAttr);

			startOver = paper.text (50,580,'Start Over');
			startOver.attr({
						fill: 'red',
						'font-size':'16px',
						cursor:'pointer'	
			});
			
		// set text highlighting for mouseover and mouseout
		articleT.mouseover(function () {
				highlightT(this);
		});
		articleT.mouseout(function () {
				rmvHighlightT(this);
		});
		journalT.mouseover(function () {
				highlightT(this);
		});
		journalT.mouseout(function () {
				rmvHighlightT(this);
		});
		researchT.mouseover(function () {
				highlightT(this);
		});
		researchT.mouseout(function () {
				rmvHighlightT(this);
		});
		helpT.mouseover(function () {
				highlightT(this);
		});
		helpT.mouseout(function () {
				rmvHighlightT(this);
		});


	startOver.click(function () {
		paper.clear(); // removes from the DOM
		init();
//		alert('startOver called');
	});

	articleT.click(function () {
		cleanUp();
		var linkTo='http://library.iit.edu/articles/citation.php';
		fadeOut(this);
		moveR(20);
		displayText('The library has a citation finder\nto help you search for a specific\nitem. We subscribe to more than\n120 databases, so this is the best\nway to find your article.');
		createButton(linkTo);
		fadeIn(this);
	});

	
	journalT.click(function () {
		cleanUp();
		var linkTo='http://library.iit.edu/journals/';
		fadeOut(this);
		moveR(210);
		displayText('The library subscribes to more\n than 35,000 full-text journals.\nUse our journal finder to\nquickly find out if you can access\nyour favorite title online.');
		createButton(linkTo);
		fadeIn(this);
	});


	researchT.click(function () {
		cleanUp();
		var linkTo='http://library.iit.edu/subjects/';
		fadeOut(this);
		moveR(400);
		displayText('Our research guides recommend\nbooks, databases, and websites\n for your assignments, and we\nhave them for every major\n area of study--plus many more.');
		createButton(linkTo);
		fadeIn(this);
	});

	helpT.click(function () {
		cleanUp();
		var linkTo='http://library.iit.edu/ask/';
		fadeOut(this);
		moveR(590);
		displayText('Not sure where to start?\nOur \"Ask a Librarian\" page will\nshow you how to call, email and\n chat with us. We also have a \nsubject specialist for every\nsubject major at IIT.');
		createButton(linkTo);
		fadeIn(this);
	});

	
}//end init



   