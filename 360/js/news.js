// JavaScript Document
function $(id){
	return document.getElementById(id);
}

var timer1;
var num=5;
function addNews(){
	newsAddBarClose();//增加新闻模块隐藏
	newsAddImgOpen();//进程动态图片模块显示
	newsAddNumOpen();//程动态数字模块显示
    timer1=setInterval(newsAddNumChanges,200);//进城数字开始每秒减1
}


//增加新闻按钮显示
function newsAddBarOpen(){
    $("newsAddBar").className="news-addbar-block";
	$("newsMaxBox").className="news-maxbox-old";
}

//增加新闻按钮隐藏
function newsAddBarClose(){
    $("newsAddBar").className="news-addbar-none";
	$("newsMaxBox").className="news-maxbox-new";
	
}

//进程动态图片显示
function newsAddImgOpen(){
	$("newsAddImg").className="news-adding-img-block";
	setTimeout(newsAddBarOpen,10000);//增加新闻按钮十秒后再次显示
	
}

//进程动态图片关闭
function newsAddImgClose(){
	$("newsAddImg").className="news-adding-img-none";
	
}


//进程动态数字模块显示
function newsAddNumOpen(){
	$("newsAddNum").className="news-adding-num-block";
}

//进程动态数字模块关闭
function newsAddNumClose(){
	$("newsAddNum").className="news-adding-num-none";
}

//加载进程数字变化
function newsAddNumChanges(){
    var addNum=$("newsAddNums");	
	
	addNum.innerHTML=num;
	if(num>1){
	   num--;
	}else if(num==1){
	   num=5;
	   newsAddImgClose();//进程图片模块隐藏
       newsAddNumClose();//进程数字模块隐藏
	   for(var i=1;i<=3;i++){
		    addnew();
		   }
	    
	   clearInterval(timer1);//清除进程数字变化定时器  
	}
}


//添加新闻工厂
function addnew(){
	
	var newli1=document.createElement('li');
	var newa1=document.createElement('a');
	newa1.innerHTML="中国网";
	newli1.appendChild(newa1);
	var newli2=document.createElement('li');
	
	var newspan2=document.createElement('span');
	newspan2.innerHTML="1月29日";
	newli2.appendChild(newspan2);
	
	var newli3=document.createElement('li');
	var newa2=document.createElement('a');
	newa2.innerHTML="顶0";
	newli3.appendChild(newa2);
	
	var newli4=document.createElement('li');
	var newa3=document.createElement('a');
	newa3.innerHTML="踩0";
	newli4.appendChild(newa3);
	
	var newli5=document.createElement('li');
	var newa4=document.createElement('a');
	newa4.innerHTML="分享";
	newli5.appendChild(newa4);
	
	var newul=document.createElement('ul');
	newul.appendChild(newli1);
	newul.appendChild(newli2);
	newul.appendChild(newli3);
	newul.appendChild(newli4);
	newul.appendChild(newli5);
	
	var newdiv1=document.createElement('div');
	newdiv1.appendChild(newul);
	newdiv1.className="news-minbox-bot";
	
	var newspan3=document.createElement('span');
	newspan3.innerHTML="秘鲁的马丘比丘古城 对于印加帝国的城市而言,秘鲁的马丘比丘古城是已知保存最好并且得到了细心的关照,它也是世界各地旅行... 有那么一段时间埃及金字塔完全是众人注意的焦点。事实上它们被用于埋葬法老以及不是很出名的东西。";
	var newa5=document.createElement('a');
	newa5.innerHTML="[详情]";
	var newdiv2=document.createElement('div');
	newdiv2.appendChild(newspan3);
	newdiv2.appendChild(newa5);
	newdiv2.className="news-content";
	
	var newspan4=document.createElement('a');
	newspan4.innerHTML="盘点世界十大历史遗迹:未解的时间之谜";
	var newdiv3=document.createElement('div');
	newdiv3.appendChild(newspan4);
	newdiv3.className="news-title";
	

	var newdiv4=document.createElement('div');
	newdiv4.appendChild(newdiv3);
	newdiv4.appendChild(newdiv2);
	newdiv4.appendChild(newdiv1);
	newdiv4.className="news-minbox-left";
	
	
	var newimg=document.createElement('img');
	newimg.src="img/newsadd1.jpg";
	var newdiv5=document.createElement('div');
	newdiv5.appendChild(newimg);
	newdiv5.className="news-minbox-right";
		
	var newimg1=document.createElement('img');
	newimg1.src="img/t01aff0dbc50e8d9deb.png";
	newimg1.title="关闭";
	var idnum=($("newsMaxBox").childNodes.length)-3;
	newimg1.id="newsDelBtn"+idnum;
	//newimg1.onclick=delNews("newsDelBtn"+idnum);
	//newimg1.addEventListener("click", delNews("newsDelBtn"+idnum), false);
	//在一个新函数中调用要执行的方法、不会被直接执行
	newimg1.onclick=function(){
		delNews("newsDelBtn"+idnum)
		}
	var newdiv6=document.createElement('div');
	
	newdiv6.appendChild(newimg1);
	newdiv6.className="new-minbox-closebtn";

	
	var newMaxDiv=document.createElement('div');
	newMaxDiv.appendChild(newdiv4);
	newMaxDiv.appendChild(newdiv5);
	newMaxDiv.appendChild(newdiv6);
	newMaxDiv.className="news-minbox";
	
	newMaxDiv.id="newsminBox"+idnum;
	
	var box=$("newsMaxBox");
	var first=box.childNodes[0];
	box.insertBefore(newMaxDiv,first);
	
	}
	
var b=true;	
var timer2;	
function delNews(id){
        spstr = id.split("");
        var btnIdLastStr=spstr[spstr.length-1];
		var boxId="newsminBox"+btnIdLastStr;
  timer2=setInterval(function(){
		  var obj=$(boxId);
	      var newHeight=obj.offsetHeight;
		  $(id).style.display="none";
	      if(newHeight>=0){
		    obj.style.height=(newHeight-10)+"px";
	      }else if(newHeight==0){
			
			$("newsMaxBox").className="news-maxbox-old";
		    clearInterval(timer2); //关闭定时器2	
	      }							
 },20);
	

}


