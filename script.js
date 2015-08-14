/*					  *
*					  *
*	Chrome Animation  *
*					  *
*					  */


//Declaring all variables i need for this animation
var redTop = $('#redTop'),
	yellowRight = $('#yellowRight'),
	greenLeft = $('#greenLeft'),
	greenSpike = $('#greenSpike'),
	whiteCircle = $('#whiteCircle'),
	blueCircle = $('#blueCircle'),
	yellowSpike = $('#yellowSpike'),
	redSpike = $('#redSpike'),
	svgObject = $('#svgObject'),
	chromeTL = new TimelineMax({onUpdate:updateSlider});

// Creating timeline
chromeTL.from(redTop, 1, {x:100, y:200, scale:0, rotation:-90, opacity:0, ease: Back.easeOut.config(1.7)}, "-=0.7")
		.from(yellowRight, 1, {x:100, y:200, scale:0, rotation:-90, opacity:0, ease: Back.easeOut.config(1.7)}, "-=0.7")
		.from(greenLeft, 1, {x:100, y:200, scale:0, rotation:-90, opacity:0, ease: Back.easeOut.config(1.7)}, "-=0.7")
		.from(redSpike, 0.5, {x:100, y:200, opacity:0}, "-=0.2")
		.from(yellowSpike, 0.5, {x:-250, y:0, opacity:0}, "-=0.2")
		.from(greenSpike, 0.5, {x:50, y:-270, opacity:0}, "-=0.2")
		.from(blueCircle, 1, {scale:0.5, rotation:7200, opacity:0, transformOrigin:"50% 50%", ease: Back.easeOut.config(1.7)})
		.from(whiteCircle, 1, {scale:0, rotation:360, opacity:0, transformOrigin:"50% 50%", ease: Back.easeOut.config(8)}, "-=0.2")
		.from(svgObject, 2.5, {rotation:-720, transformOrigin:"50% 50%", ease: Back.easeOut.config(1.7)}, "-=0.5")
;
// No auto start
chromeTL.stop();

// setting up slider
$("#chromeSlider").slider({
	range: false,
	min: 0,
	max: 1,
	step:0.001,
	slide: function ( event, ui ) {
		chromeTL.progress( ui.value ).pause();
	}
});    

function updateSlider() {
	$("#chromeSlider").slider("value", chromeTL.progress());
}

$("#chromePlay").click(function(){
	if(chromeTL.progress() === 1){
		chromeTL.restart()
	} else {
		chromeTL.play();
	}
});


/*					  *
*					  *
*	Drive Animation   *
*					  *
*					  */


//Declaring all variables i need for this animation
var driveYellow = $('#driveYellow'),
	driveBlue = $('#driveBlue'),
	driveGreen = $('#driveGreen'),
	driveBlueSpike = $('#driveBlueSpike'),
	driveYellowSpike = $('#driveYellowSpike'),
	driveGreenSpike = $('#driveGreenSpike'),
	drive = $('#drive'),
	driveTL = new TimelineMax({onUpdate:updateSlider});

// Creating timeline
driveTL.staggerFrom([driveBlueSpike, driveYellowSpike, driveGreenSpike], 2, {rotation:360,x:200,y:200, opacity:0, ease:Elastic.easeOut})
	   .to(driveYellowSpike, 0.2, {x:-25,y:0})
	   .to(driveBlueSpike, 0.2, {x:15,y:0}, "-=0.2")
	   .to(driveGreenSpike, 0.2, {x:-5,y:35}, "-=0.2")
	   .from(drive, 0.5, {scale:0.2, rotation:-360, transformOrigin:"50% 50%"}, "-=1")
	   .from(driveBlue, 2, {scale:0, opacity:0, x:200,y:0, ease:Elastic.easeOut})
	   .from(driveYellow, 2, {scale:0, opacity:0, x:50,y:-200, ease:Elastic.easeOut}, "-=2")
	   .from(driveGreen, 2, {scale:0, opacity:0, x:-50,y:200, ease:Elastic.easeOut}, "-=2")
	   .to(driveYellowSpike, 0.2, {x:0,y:0}, "-=1")
	   .to(driveBlueSpike, 0.2, {x:0,y:0}, "-=1")
	   .to(driveGreenSpike, 0.2, {x:0,y:0}, "-=1")
;
// No auto start
driveTL.stop();

// setting up slider
$("#driveSlider").slider({
	range: false,
	min: 0,
	max: 1,
	step:0.001,
	slide: function ( event, ui ) {
		driveTL.progress( ui.value ).pause();
	}
});    

function updateSlider() {
	$("#driveSlider").slider("value", driveTL.progress());
}

$("#drivePlay").click(function(){
	if(driveTL.progress() === 1){
		driveTL.restart()
	} else {
		driveTL.play();
	}
})

/*					  *
*					  *
*	Android Animation   *
*					  *
*					  */


//Declaring all variables i need for this animation
var androidLeftArm = $('#androidLeftArm'),
	androidRightArm = $('#androidRightArm'),
	androidLeftLeg = $('#androidLeftLeg'),
	androidRightLeg = $('#androidRightLeg'),
	androidHead = $('#androidHead'),
	androidBody = $('#androidBody'),
	androidleftEye = $('#androidleftEye'),
	androidRightEye = $('#androidRightEye'),
	android = $('#android'),
	androidTL = new TimelineMax({onUpdate:updateSlider});

// Creating timeline
androidTL.from(android, 4, {scale:0.2, opacity:0, x:-200,y:200})
		 .from(androidLeftLeg, 1, {y:0,rotation:20,transformOrigin:"50% 0%"}, "-=5")
		 .from(androidRightLeg, 1, {y:0,rotation:20,transformOrigin:"50% 0%"}, "-=5")
		 .to(androidLeftLeg, 1, {rotation:-20,transformOrigin:"50% 0%"}, "-=4.2")
		 .to(androidRightLeg, 1, {rotation:-20,transformOrigin:"50% 0%"}, "-=4.2")
		 .to(androidLeftLeg, 1, {rotation:20,transformOrigin:"50% 0%"}, "-=3.2")
		 .to(androidRightLeg, 1, {rotation:20,transformOrigin:"50% 0%"}, "-=3.2")
		 .to(androidLeftLeg, 1, {rotation:-20,transformOrigin:"50% 0%"}, "-=2.2")
		 .to(androidRightLeg, 1, {rotation:-20,transformOrigin:"50% 0%"}, "-=2.2")
		 .to(androidLeftLeg, 1, {rotation:0,transformOrigin:"50% 0%"}, "-=1.2")
		 .to(androidRightLeg, 1, {rotation:0,transformOrigin:"50% 0%"}, "-=1.2")
		 .to(androidLeftArm, 1, {rotation:-150,transformOrigin:"50% 0%"}, "-=1.5")
		 .to(androidRightArm, 1, {rotation:-150,transformOrigin:"50% 0%"}, "-=1.5")
		 .to(androidBody, 1, {rotation:10, transformOrigin:"50% 50%"}, "-=1.5")
		 .to(androidHead, 1, {rotation:10, transformOrigin:"50% 50%"}, "-=1.5")
		 .to(androidLeftArm, 1, {rotation:150,transformOrigin:"50% 0%"})
		 .to(androidRightArm, 1, {rotation:150,transformOrigin:"50% 0%"}, "-=1")
		 .to(androidBody, 1, {rotation:-10, transformOrigin:"50% 50%"}, "-=1")
		 .to(androidHead, 1, {rotation:-10, transformOrigin:"50% 50%"}, "-=1")
		 .to(androidLeftArm, 1, {rotation:0,transformOrigin:"50% 0%"})
		 .to(androidRightArm, 1, {rotation:0,transformOrigin:"50% 0%"}, "-=1")
		 .to(androidBody, 1, {rotation:0, transformOrigin:"50% 50%"}, "-=1")
		 .to(androidHead, 1, {rotation:0, transformOrigin:"50% 50%"}, "-=1")
		 .to(androidLeftArm, 0.5, {rotation:90,transformOrigin:"50% 0%"})
		 .to(androidRightArm, 0.5, {rotation:-90,transformOrigin:"50% 0%"}, "-=0.5")
		 .to(androidLeftArm, 1, {x:40})
		 .to(androidRightArm, 1, {x:-40}, "-=1")
		 .to(androidHead, 1, {y:10}, "-=1")
		 .to(androidleftEye, 1, {y:40})
		 .to(androidRightEye, 1, {y:40}, "-=1")
		 .to(android, 1, {opacity:0.6, y:-150})
		 .to(androidLeftLeg, 1, {y:20}, "-=1")
		 .to(androidRightLeg, 1, {y:-20}, "-=1")
		 .to(android, 1, {opacity:1, y:0}, "-=0.5")
		 .to(androidLeftLeg, 1, {y:0}, "-=1")
		 .to(androidRightLeg, 1, {y:0}, "-=1")
		 .to(android, 1, {opacity:0, y:-500})
		 .to(androidLeftLeg, 1, {y:50}, "-=1")
		 .to(androidRightLeg, 1, {y:-50}, "-=1")
		 .to(androidLeftLeg, 1, {y:0})
		 .to(androidRightLeg, 1, {y:0}, "-=1")
		 .to(android, 1, {y:0}, "-=1")
;
// No auto start
androidTL.stop();

// setting up slider
$("#androidSlider").slider({
	range: false,
	min: 0,
	max: 1,
	step:0.001,
	slide: function ( event, ui ) {
		androidTL.progress( ui.value ).pause();
	}
});    

function updateSlider() {
	$("#androidSlider").slider("value", androidTL.progress());
}

$("#androidPlay").click(function(){
	if(androidTL.progress() === 1){
		androidTL.restart()
	} else {
		androidTL.play();
	}
})

