var totalfruits=0;
var fruitsgone=0;
var images=[];
for(var i=0;i<10;i++)
{
	images[i] = new Image();
	images[i].src='./images/fruitsimg/'+i;
}
images[10] = new Image();
images[10].src='./images/bomb';
images[11] = new Image();
images[11].src='./images/freeze';
images[12] = new Image();
images[12].src='./images/flenzy';
images[13] = new Image();
images[13].src='./images/double';


var counter=0;
var specialfruiteffectonscreen=-1;
var ids=[];
 for(var i=0;i<100;i++)
	ids[i]=i;

	function moveFruit(fruitx,fruity,incx,decy,id){
		if(counter<7)
		{		
		var imgno=Math.floor((Math.random()*24)%10);
		counter++;
		}
		else
		{
		counter=0;
		if(specialfruiteffectonscreen==-1)
		{
			specialfruiteffectonscreen=Math.floor((Math.random()*5)%4);
			setTimeout(function(){specialfruiteffectonscreen=-1},6000);
		}
		else
		{	
			return;
		}	
		var imgno=10+specialfruiteffectonscreen;
		}
		var angle=0;
			fruitx += incx;
			decy=decy-0.2;
			fruity = fruity-decy; 	
			var list=[imgno,fruitx,fruity,id,angle,incx,decy];
				imgref.push(list);
	}			
	var nospeed=500;	
	function startnoSI(){
	    noSI=setInterval(function(){
		var id=uid;
                var Vx=Math.random()*4;
                var x=Math.random()*1300;
                if(x<100*ww/dw)
                x=100*ww/dw;
                if(x>1000*ww/dw)
                x=1000*ww/dw;    
                if(Vx<1)
                Vx=Vx*3;
                if(x>600*ww/dw) 
                Vx=-1*Vx;
         
		totalfruits++;
		
		moveFruit(x,window.innerHeight-10,Vx,15,id);
		uid++;
		},nospeed);
	}
	var toggle=0;
	function startstartnoSI(){
		snoSI=setInterval(function(){
		if(toggle == 1)
		{
			clearInterval(noSI);
			toggle=0;
		}
		else
		{
			startnoSI();
			toggle=1;
		}
	},2000);
	}

	
	var speed=20;
	function startspeedSI(){
		speedSI=setInterval(function(){
		var len=imgref.length;
		for(var i=0;i<len;i++)
		{
			imgref[i][1] += imgref[i][5];
			imgref[i][6]=imgref[i][6]-0.2;
			imgref[i][2] = imgref[i][2]-imgref[i][6]; 	
		}
		for(var i=0;i<len;i++)
		{ 	
			if(imgref[i][2] >= window.innerHeight)
			{
				if(imgref[i][0] != 10)
					fruitsgone++;
				imgref=del(imgref,i);
				len--;
				break;
				
			}
		}
			f_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
			for(var i=0;i<len;i++)	
			{	
			//	f_ctx.save();
			//	f_ctx.translate(imgref[i][1]+35,imgref[i][2]-35);
			//	f_ctx.rotate(imgref[i][4]);
			//	imgref[i][4] +=	0.01;			
				f_ctx.drawImage(images[imgref[i][0]],imgref[i][1],imgref[i][2],70,70);
			//	f_ctx.restore();
			}		
			},speed);
		}



