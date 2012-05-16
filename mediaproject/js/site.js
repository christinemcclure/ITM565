document.addEventListener("DOMContentLoaded", function() {
	audio = document.getElementsByTagName("audio")[0];
	audioDuration = document.getElementById("audioDuration");
	audioElapsed = document.getElementById("audioElapsed");
	audioTimeLeft = document.getElementById("audioTimeLeft");
	audioPlay = document.getElementById("audioPlay");
	audioPause = document.getElementById("audioPause");
	audioStop = document.getElementById("audioStop");
	seeHate = document.getElementById("seeHate");
	hideHate = document.getElementById("hideHate");
	audioLoaded = document.getElementById("audioLoaded");
	MozillaAPIWrapper = document.getElementById("MozillaAPIWrapper");
	audio.addEventListener("loadedmetadata", setDuration, false);
	audio.addEventListener("timeupdate", setElapsed, false);
	audio.addEventListener("timeupdate", setTimeLeftDuration, false);
	frame = document.getElementsByTagName("canvas")[0];
	canvas = frame.getContext('2d');
	testChannels = audio.mozChannels; // check for availability Mozilla Audio Data API capability
	if (testChannels >=0){
		MozillaAPIWrapper.className=""; // unhide wrapper if API available
	}
	else {
			MozillaAPIWrapper.innerHTML="This element would normally be hidden from browsers that cannot use the Mozilla audio data API.";
	}
	


audio.addEventListener("MozAudioAvailable", buildWave, false);

	function setDuration(event) {
		audioTimeLeft.innerHTML = Math.round(audio.duration);
	}

	function setTimeLeftDuration(event) {
			audioTimeLeft.innerHTML = Math.round(audio.duration-audio.currentTime);
	}
	function setElapsed(event) {
		audioElapsed.innerHTML = Math.round(audio.currentTime);
		amountLoaded = (audio.currentTime/audio.duration)*300;
		audioLoaded.style.width = amountLoaded + 'px';
	}
	
		
}, false);

	function playPause() {
		if (audio.paused){
			audio.play();
			audioPlay.className = 'hidden';
			audioPause.className = '';
			audioLoaded.className='playing';
			audioStop.className='';
		} else {
			audio.pause();
			audioPlay.className = '';
			audioPause.className = 'hidden';
			audioStop.className='';
		}
	}
	function playStop() {
		audio.pause();
		audio.currentTime=0;
		audioPlay.className = '';
		audioPause.className = 'hidden';
		audioStop.className='hidden';
	}

	function genWave(){
		if (audio.paused){
			audio.play();
			audioPlay.className = 'hidden';
			audioPause.className = '';
			audioLoaded.className='playing';
			audioStop.className='';
		}
			seeHate.className="hidden";
			hideHate.className="";
			frame.className="showCanvas";
					canvas.strokeStyle = "#ED1607";
					canvas.lineWidth=10;
					canvas.stroke();
			audio.addEventListener("MozAudioAvailable", buildWave, false);
			function buildWave (event){
					var channels = audio.mozChannels;
					var frameBufferLength = audio.mozFrameBufferLength;
					var fbData = event.frameBuffer;
					var stepInc = (frameBufferLength / channels) / frame.width;
					var waveAmp = frame.height / 2;
					frame.width = frame.width;
					canvas.beginPath();
					canvas.moveTo(0, waveAmp - fbData[0] * waveAmp);
					for(var i=1; i < frame.width; i++){
							canvas.lineTo(i, waveAmp - fbData[i*stepInc] * waveAmp);
					}
					canvas.strokeStyle = "#ED1607";
					canvas.lineWidth=10;
					canvas.stroke();
			}
	}

	function genWaveStop(){
			seeHate.className="";
			hideHate.className="hidden";
			frame.className="";
			audio.addEventListener("MozAudioAvailable", buildWave, false); // still need this or wave will appear
				canvas.strokeStyle = "#fff";
				canvas.lineWidth=0;
				canvas.stroke();
				frame.width=frame.width;
			function buildWave (event){
					var channels = audio.mozChannels;
					var frameBufferLength = audio.mozFrameBufferLength;
					var fbData = event.frameBuffer;
					var stepInc = (frameBufferLength / channels) / frame.width;
					var waveAmp = frame.height / 2;
					frame.width = frame.width;
					canvas.beginPath();
					canvas.moveTo(0, waveAmp - fbData[0] * waveAmp);
					for(var i=1; i < frame.width; i++){
							canvas.lineTo(i, waveAmp - fbData[i*stepInc] * waveAmp);
					}
					canvas.strokeStyle = "#fff";
					canvas.lineWidth=0;
					canvas.stroke();
			}
	}	
	
	
	function playAt(seconds) {
		audio.currentTime=seconds;
		audio.play();
		audioPlay.className = 'hidden';
		audioPause.className = '';
		audioLoaded.className='playing';
		audioStop.className='';
	}
