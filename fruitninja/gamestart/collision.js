//COLLISION DETECTION
function collision(){	
	errx=10*ww/dw;
	erry=25*wh/dh;
	var len=imgref.length;
	for(var i=0;i<len;i++){
		if(imgref[i]==undefined)
			continue;
		var x=imgref[i][1];
		var y=imgref[i][2];
		var start,end,xx,yy;
		
		if(X-errx>prevX-errx){
			start=prevX-errx;
			end=X-errx;
		}
		else{
			start=X-errx;
			end=prevX-errx;
		}
		
		for(xx=start;xx<=end;xx++){
			yy = ((Y-prevY)*(xx-prevX+errx))/(X-prevX) + prevY-erry;
			if(xx>x && xx<x+70*ww/dw && yy<y+70*wh/dh && yy>y){
				var saveid=imgref[i][3];
				var saveno=imgref[i][0];
				var saveincx=imgref[i][5];
				var savedecy=imgref[i][6];
				imgref=del(imgref,i);
				if(saveno == '10')
					bombhandler();
				else{
				 	if(saveno == '11')
				   		freezehandler();
				 	else if(saveno == '12')
				    	flenzyhandler();
				 	else if(saveno == '13')
						doublehandler();    
						
					splashNpiecehandler(x,y,saveno,saveincx,savedecy);
					scorehandler();
					if(saveno != '10')
						dropshandler(x+35,y+35,saveno);
				}
				break;	
			}		
		}
	}
}

/********************************/

//SPLASH VARIABLES
var splash=[];
var sstatus=[];
for(var i=0;i<14;i++){
	splash[i] = new Image();
	splash[i].src='./splash/'+i;
}
/*************************/
	
var pimages=[];
for(var i=0;i<21;i++){
	pimages[i]=new Image();
	pimages[i].src='./half-images/'+i;
}

var pimgref=[];
var puid=0;
/***************************/
var Drops=[];
function dropshandler(dx,dy,fruitN){
	var dropdetails=[];
	for(var i=0;i<40;i++){
		var dvx=Math.floor(Math.random()*10);
		var dvy=Math.floor(Math.random()*10);
		var r=20;
		if(((Math.floor(Math.random()*2))%2)==1){
			dvx=-dvx;
		}
		if(((Math.floor(Math.random()*2))%2)==1){
			dvy=-dvy;
		}
		dropdetails=[dx,dy,dvx,dvy,r,fruitN];		
		Drops.push(dropdetails);
	}
		
}

setInterval(function(){
	var len=Drops.length;
	for(var i=0;i<len;i++){
		if(Drops[i][4] < 0){
			Drops=del(Drops,i);
			len--; i--;
		}
	}
	drop_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	for(var i=0;i<len;i++){
		drawCircle2(Drops[i][0],Drops[i][1],Drops[i][4],Drops[i][5]);
		// drops[i][2]-=0.1;
		// drops[i][3]-=0.3;
		Drops[i][0]+=Drops[i][2];	
		Drops[i][1]+=Drops[i][3];
		Drops[i][4]-=1;
	}
},20);

function drawCircle2(centerX,centerY,radius,number){ 
	drop_ctx.beginPath();
    drop_ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    drop_ctx.fillStyle = dropscolor[number];
    drop_ctx.fill();
}

function splashNpiecehandler(spx,spy,fruitN,sincx,sdecy){
	//SPLASH HANDLER
	var alpha=1;	
	var sdetails=[fruitN,spx,spy,alpha];
	sstatus.push(sdetails);

	/****************************/
	//PIECE HANDLER

	function movepieces(px,py,incx,decy,fruitN,id){
		if(fruitN <10){ 
			var imgno1=2*fruitN;
			var imgno2=2*fruitN+1;
			
			var pnflag=0;
			var pangle=0;
			var px1=px;
			var px2=px;
			px1 += 25;
			px2 -=25;
			decy=decy-0.6;
			py = py-decy; 	
			var list1=[imgno1,px1,py,id,pangle,incx,decy];
			var list2=[imgno2,px2,py,id,pangle,incx,decy];
			pimgref.push(list1,list2);				
		}
	}
	var id=puid;
	movepieces(spx,spy,sincx,sdecy,fruitN,id);
	puid++;
}

//Animation for splash disappereance
setInterval(function(){
	var len=sstatus.length;
	for(var j=0;j<len;j++){
		if(sstatus[j][3] <= 0){			
			sstatus.shift();
			j--; len--;		
		}
	}
	len=sstatus.length;
	splash_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	for(var j=0;j<len;j++){	
		splash_ctx.globalAlpha=sstatus[j][3];	
		sstatus[j][3] -= (Math.random()%0.04); 
		splash_ctx.drawImage(splash[sstatus[j][0]],sstatus[j][1]-20,sstatus[j][2]-20,130,130);
	}
	splash_ctx.globalAlpha=1;
},100)

//Half fruit movement
setInterval(function(){
	var len=pimgref.length;
	for(var i=0;i<len;i=i+1){		
		if(i%2==0){
			pimgref[i][1] += pimgref[i][5];
			pimgref[i][6] -= 0.4;
			pimgref[i][2] -= pimgref[i][6];
		}
		else{
			pimgref[i][1] +=pimgref[i][5];
			pimgref[i][6] -= 0.5;
			pimgref[i][2] -= pimgref[i][6]; 	
		}
	}	
	for(var i=0;i<len;i=i){	
		if(pimgref[i][2] >= window.innerHeight){
			pimgref=del(pimgref,i);
			// pimgref=del(pimgref,i+1);
			len=len-2;	
			break;
		}
		else  i+=1;		
	}

	hf_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
	var len=pimgref.length;
	for(var i=0;i<len;i++){	
		// if(pimgref[i] != undefined)
		hf_ctx.drawImage(pimages[pimgref[i][0]],pimgref[i][1],pimgref[i][2],60,60);	
	}
},30)
