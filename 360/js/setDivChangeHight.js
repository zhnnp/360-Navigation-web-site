// JavaScript Document



var skinTimer;

function $(id){
	return document.getElementById(id);
}


	
var timer1;	//定时器1
var timer2;//定时器2



//让div变大函数
function toBig(){
	clearInterval(timer2); 
	var obj=$("skin");//div对象
	var newHeight=obj.offsetHeight;//获取div的当前height值且赋值给newHeight
	
	//当div的height值增加到预设的334px时，停止变大
	if(newHeight<334){
		obj.style.height=(newHeight+10)+"px";
	}else{
	    clearInterval(timer1); 	//关闭定时器2
		$("menubar").className="top-changes";
	}
	
};

//让div变小函数
function toSmall(){
	 clearInterval(timer1); 
	var obj=$("skin");
	var newHeight=obj.offsetHeight;
	if(newHeight>0){
		obj.style.height=(newHeight-10)+"px";
	}else{
		 clearInterval(timer2); //关闭定时器2	
		 $("menubar").className="top1";
	}
	
}

//开启定时器1
function openDiv(){
    timer1=setInterval(toBig,5);
	
	 skinTimerOpen();
	}
//关闭定时器2
function closeDiv(){
    timer2=setInterval(toSmall,5);
	skinTimerClose();
	}
//div透明渐变函数
var alpha=100 ;
function changeFiter(){
	var skinObj1=$("pifu-leftbtn");	
	var skinObj2=$("pifu-rightbtn");	
	alpha--;
	skinObj1.style.filter = 'alpha(opacity='+alpha+')';    
    skinObj1.style.opacity = alpha/100;
	skinObj2.style.filter = 'alpha(opacity='+alpha+')';    
    skinObj2.style.opacity = alpha/100;
	if(alpha<2){alpha=100;}
}
//div透明渐变定时器开始
function skinTimerOpen(){
	skinTimer=setInterval(changeFiter,50);
	}
//div透明渐变定时器关闭
function skinTimerClose(){
	 clearInterval(skinTimer);
	}


function changeColor(id){
	
	document.body.style.backgroundColor=$(id).style.backgroundColor;
	//$('pageIframe').style.backgroundColor=$(id).style.backgroundColor;
   // $('searchEngines').style.backgroundColor=$(id).style.backgroundColor;

	}


//控制皮肤列表divHeight加减的函数
