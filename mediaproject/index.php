<?php $docRoot = "/mcclure/mediaproject/"; ?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Assignment 3</title>
  <link rel="stylesheet" type="text/css" media="screen" href="<?php echo $docRoot . "styles/screen.css"; ?>" />
	<script type="text/javascript" src="<?php echo $docRoot . "js/site.js"; ?>"></script> 
</head>

<body>
<div id="wrapper">
  <div class="column">
    <h1>Media Project</h1>
    <h2>Christine McClure</h2>
    <h3>Project notes</h3>
    <p>This project combines and expands on two of the HTML5 cookbook recipes: Manipulating the audio stream (4.2) and Visualizing audio using canvas (4.4) using the Mozilla audio API. </p>
    <p>I started with the sample code, then modified it to calculate the amount of time left in the clip from the duration, and changed the way the waveform displays to be a more agressive-looking black and red combination. </p>
    <p><strong>Browser detection</strong>: Since the Mozilla audio API is only available for Netscape, I wanted to hide the elements that use it from all other browsers. Rather than doing browser detection, I used feature detection because it would keep users with older Netscape browsers from seeing an option that didn't work for them. If I were to take this project further, I'd add another version of the &quot;see the hate&quot; function for other browsers, such as animated gifs. </p>
    <p><strong>Ajax</strong>: This page could be enhanced by adding additional audio clips from the Limbaugh show about the incident. A list of audio titles could be displayed. Based on the selection, the sound files, subject jump-tos, and description could be loaded via Ajax. </p>
  </div>  
  <div class="column">
    <p>Rush Limbaugh offers <a href="http://en.wikipedia.org/wiki/Rush_Limbaugh_%E2%80%93_Sandra_Fluke_controversy">his opinion on Sandra Fluke</a>, who was denied from testifying at a Congressional committee on the effect  the <a href="http://en.wikipedia.org/wiki/Patient_Protection_and_Affordable_Care_Act">Patient Protection and Affordable Care Act </a>of 2010 would have on religious institutions. Fluke would have been the only woman on the panel; she later gave her testimony at an &quot;unofficial&quot; hearing about Georgetown University's policy of not including oral contraceptives in their health care plan. </p>
    <audio preload>
      <source src="<?php echo $docRoot . "audio/rush.ogg";?> ">
      <source src="<?php echo $docRoot . "audio/rush.mp3";?> ">
      <p>Download <a href="/mcclure/mediaproject/audio/rush.ogg">the hatefest</a> of Rush Limbaugh calling a college student a slut on February 29, 2012.</p>
      <p>Upgrade your browser to the latest version to enjoy all the HTML5 goodness that's out there!</p>
    </audio>
    
    <div class="playerControls">
      <button id="audioPlay" title="Play"
      onclick="playPause();"><img src="<?php echo $docRoot . "img/yelling.jpg";?>" /><p>Play the Hate!</p></button>
      <button id="audioPause" class="hidden" title="Pause"
      onclick="playPause();"><img src="<?php echo $docRoot . "img/hand.jpg";?>" /><p>Pause the Hate!</p></button>
      <button id="audioStop" class="hidden" title="Stop" onclick="playStop();"><img src="<?php echo $docRoot . "img/taped.jpg";?>" /><p>Stop the Hate!</p></button>
      <div id="audioSeek">
        <div id="audioLoaded"></div>
      </div>
    </div>
    
    <div class="time">
      <div class="block">You have survived <div id="audioElapsed">0</div> seconds of hate.</div>
       <div class="block">You have <div id="audioTimeLeft">0</div> seconds of hate left.</div>
    </div>
    
    <div id="highlights">
	    <p>Skip to the highlights:</p>
      <ul>
      		<li onClick="playAt(16)">"Slut"</li>
      		<li onClick="playAt(27)">"Pimps"</li>
      		<li onClick="playAt(51)">"Round-heeled"</li>
      		<li onClick="playAt(63)">"Hooker"</li>
      </ul>
    </div>
    <div id="MozillaAPIWrapper" class="noAPI">
      <button id="seeHate" title="Generate Waveform" onclick="genWave();"><img src="<?php echo $docRoot . "img/cigar.jpg";?>" /><p>See the hate!</p></button>
      <button id="hideHate" class="hidden" title="Stop Waveform" onclick="genWaveStop();"><img src="<?php echo $docRoot . "img/bagged.jpg";?>" />
      <p>Hide the hate!</p></button>
      <canvas width="512" height="100"></canvas>
    </div>
  </div>
</div>

</body>
</html>
