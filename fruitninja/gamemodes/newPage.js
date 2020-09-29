imggo=new Image();
imggo.src='./images/go';
imgsixty=new Image();
imgsixty.src='./images/sixtyseconds';

function newPage(){
	if(X>440 && X< 560 && Y<460 && Y>340)
	{
//	cutFruit();
		sound_fruit.play();
		var alpha=0.1;
		var movetonext=setTimeout(function(){
		clearInterval(wname);
//		c_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
//		fruit_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		clearInterval(moveFruit);
		t_ctx.fillStyle='rgba(0,0,0,'+alpha+')';
		t_ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
		},200);

		var co=0.01;
		pagec_ctx.fillStyle='rgba(0,0,0,'+co+')';
		setTimeout(function(){
		var temp=setInterval(function(){
			co+=0.001;
			pagec_ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
		if(co >0.05)
			{ 
//			   fruit_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);				
//			   text1_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);				
//			   text2_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);				
//			   text3_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);				
//			   c_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);				
			   pagec_ctx.drawImage(imggo,600,200,150,80);
			   pagec_ctx.drawImage(imgsixty,530,300,300,150);
				clearInterval(temp);
			}
		},20)
		},200);

		setTimeout(function(){
			window.location.href='../gamestart/main.html?modeval=2';
		},3000)
	}
	if(X>190 && X< 310 && Y<560 && Y>440)
	{
//		cutFruit();
		sound_fruit.play();
		var alpha=0.1;
		var movetonext=setTimeout(function(){
		text_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		clearInterval(wname);
//		c_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
//		fruit_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		clearInterval(moveFruit);
		t_ctx.fillStyle='rgba(0,0,0,'+alpha+')';
		t_ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
		},200);

		var co=0.01;
		pagec_ctx.fillStyle='rgba(0,0,0,'+co+')';
		setTimeout(function(){
		var temp=setInterval(function(){
			co+=0.001;
			pagec_ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
		if(co >0.05)
			{
			   pagec_ctx.drawImage(imggo,600,200,150,80);			
			   clearInterval(temp);
			   
			}
		},20)
		},200);

		setTimeout(function(){
			window.location.href='../gamestart/main.html?modeval=1';

		},2000);
	}
	if(X>690 && X<810 && Y<560 && Y>440)
	{
//		cutFruit();
		sound_fruit.play();
		var alpha=0.1;
		var movetonext=setTimeout(function(){
		text_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		clearInterval(wname);
		c_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		fruit_ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		clearInterval(moveFruit);
		t_ctx.fillStyle='rgba(0,0,0,'+alpha+')';
		t_ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
		},200);


		var co=0.01;
		pagec_ctx.fillStyle='rgba(0,0,0,'+co+')';
		setTimeout(function(){
		var temp=setInterval(function(){
			co+=0.001;
			pagec_ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
		if(co >11)
			{
			   clearInterval(temp);
			}
		},20)
		},200);
		
		setTimeout(function(){
			window.location.href='../Index/main.html';

		},2000);
	}
}

function cutFruit(val,x,y){
}
