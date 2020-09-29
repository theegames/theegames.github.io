var minusten=new Image();
minusten.src='./images/minusten';

function bombhandler(){
        var co=0.5;
		bo_ctx.fillStyle='rgba(1000,1000,1000,'+co+')';
		var temp=setInterval(function(){
			co+=0.02;
			bo_ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
			if(co > 0.8)
				bo_ctx.drawImage(minusten,600,200,40,50);			
		if(co >2)
			{
			   bo_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
			   clearInterval(temp);
			}
		imgref=[];
		pimgref=[];
		sstatus=[];
		},20)
		score=score-11;
		if(score<=0)
			score=-1;
		scorehandler();
		removespecialeffects();
		
}
function freezehandler(){
	speed=40;
	clearInterval(speedSI);
	startspeedSI();
	specialFruitTaken(6);
	var timevalue=1;
	startTimerofSpecialFruit(timevalue,1);

	sfruitbackcolor_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	sfruitbackcolor_ctx.fillStyle='rgba(100,100,100,0.4)';
	sfruitbackcolor_ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
	
}


function flenzyhandler(){
	nospeed=200;
	clearInterval(noSI);
	clearInterval(snoSI);
	specialFruitTaken(7);
	startstartnoSI();
	var timevalue=1;
	startTimerofSpecialFruit(timevalue,2);

	sfruitbackcolor_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	sfruitbackcolor_ctx.fillStyle='rgba(0,0,0,0.4)';
	sfruitbackcolor_ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

}

function flenzytaken(){




}

function doublehandler(){
	specialFruitTaken(8);
	scoreinc=2;
	var timevalue=1;
	startTimerofSpecialFruit(timevalue,3);

	sfruitbackcolor_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	sfruitbackcolor_ctx.fillStyle='rgba(10,10,20,0.5)';
	sfruitbackcolor_ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
	
}  

function doubletaken(){




}


function startTimerofSpecialFruit(timeval,typeval){
	var sti=setTimeout(function(){		
		sfruitbackcolor_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		specialfruiteffectonscreen=-1;
		removespecialeffects();	
	},8000)
}			

function removespecialeffects(){
	speed=20;
	clearInterval(speedSI);
	startspeedSI();
	nospeed=500;
	clearInterval(noSI);
	clearInterval(snoSI);
	startstartnoSI();
	clearInterval(temporary);
	c_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	sfruitbackcolor_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	scoreinc=1;
	specialFT_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	timer_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	sstatus=[];
	splash_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	toggle=0;
}

var sft=[];
for(var i=0;i<3;i++)
{
	sft[i]=new Image();
	sft[i].src='./combo/'+(i+6);
}
function specialFruitTaken(val){
			var x=500;
			var y=200;
			var size=3;
			var sizemirror=3;
			var temporary=setInterval(function(){
					if(size < 140)
					{
					specialFT_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
					specialFT_ctx.drawImage(sft[val-6],x,y,size,size/2);
					x-=1.5;
					y-=6;
					size+=4;
					sizemirror=size;
					}
					else
					{
					sizemirror+=4;
					if(sizemirror > 250)
					{
					specialFT_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
					clearInterval(temporary);
					}
					}
					
			},20);
}

