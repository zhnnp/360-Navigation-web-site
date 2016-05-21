// JavaScript Document
function $(id){
	return document.getElementById(id);
	}
//iframe自适应高度函数
function dyniframesize(id) { 
var pTar = null; 
if (document.getElementById){ 
pTar = document.getElementById(id); 
} 
else{ 
eval('pTar = ' + down + ';'); 
} 
if (pTar && !window.opera){ 
//begin resizing iframe 
pTar.style.display="block" 
if (pTar.contentDocument && pTar.contentDocument.body.offsetHeight){ 
//ns6 syntax 
pTar.height = pTar.contentDocument.body.offsetHeight +20; 
pTar.width = pTar.contentDocument.body.scrollWidth+20; 
} 
else if (pTar.Document && pTar.Document.body.scrollHeight){ 
//ie5+ syntax 
pTar.height = pTar.Document.body.scrollHeight; 
pTar.width = pTar.Document.body.scrollWidth; 

} 
} 
} 

function showSkinTitle(){
	var bigDiv=$("skinListDivCenter");
	alert(bigDiv.chen)
	}






//关闭遮罩层
function choseAddWebsiteDiv(){

	$("bigDiv").style.display="none";
	$("smallDiv").style.display="none";
	returnWebsite();
	}
//显示遮罩层(因为要在本页面js中设置iframe页面中div的onclick事件、就把iframe页面中的方法复制过来了。。)
function showAddwebsiteDiv1(){
	
	var newbig=document.getElementById("bigDiv");//获取iframe框架父页面中id为bigDiv的div元素
	
	var newsmall=document.getElementById("smallDiv");
	newbig.style.display="block";
    newsmall.style.display="block";
    document.getElementById("websiteList").innerHTML="";//清空遮罩层websiteList中的所有元素，避免重复复制元素
	var newWebsiteDiv=document.getElementById('pageIframe').contentWindow.document.getElementById("websiteList")//获取遮罩层中id为：websiteList的div
	var liList=document.getElementById('pageIframe').contentWindow.document.getElementsByName("nodeA");
	  for( var i=0;i<liList.length;i++){
		  var newA=document.createElement('a');
		  newA.innerHTML=liList[i].innerHTML;
		  newA.name="nodeA";
		  newA.className="websiteStyleA";
		  var newDiv=document.createElement('div');
		  newDiv.className="websiteStyle";
		  newDiv.appendChild(newA);
		  newWebsiteDiv.appendChild(newDiv);
		 
		  }
	   
	}


//关闭遮罩层时把遮罩层中的website复制给iframe页面中的websiteDIV
function returnWebsite(){
	document.getElementById("pageIframe").contentWindow.document.getElementById("myWebSets").innerHTML="";
   
	var newWebsiteDiv=document.getElementById('pageIframe').contentWindow.document.getElementById('myWebSets')//获取iframe中id为：myWebSets的div
	var liList=document.getElementsByName("nodeA");
	  for( var i=0;i<liList.length;i++){
		  var newA=document.createElement('a');
		  newA.innerHTML=liList[i].innerHTML;
		  newA.name="nodeA";
		  newA.className="websiteStyleA";
		  var newDiv=document.createElement('div');
		  newDiv.className="websiteStyle";
		  newDiv.appendChild(newA);
		  newWebsiteDiv.appendChild(newDiv);
		  }
	      var addA=document.createElement('a');
		  addA.innerHTML="添加网址";
		  addA.addEventListener("click",showAddwebsiteDiv1,true);
		  addA.className="addWebsiteDiv";
		  var addDiv=document.createElement('div');
		  addDiv.className="websiteStyle";
		  addDiv.id="addwebsiteDivs";
		  addDiv.appendChild(addA);
		  newWebsiteDiv.appendChild(addDiv);
	}
	
	
	
	
function showChangeBtn(){
	
	  document.getElementById("changeBtnLeft").style.display = 'block';
	  document.getElementById("changeBtnRight").style.display = 'block';
}

function hideChangeBtn(){
	  document.getElementById("changeBtnLeft").style.display = 'none';
	  document.getElementById("changeBtnRight").style.display = 'none';
}

function addNewWebsite(){
	var websiteName=$("webName").value;
	var websiteUrl=$("webUrl").value;
	
	var newA=document.createElement('a');
	newA.innerHTML=websiteName;
	newA.href=websiteUrl;
	newA.name="nodeA";
	newA.className="websiteStyleA";
	var newDiv=document.createElement('div');
	newDiv.className="websiteStyle";
	newDiv.appendChild(newA);
	var newWebsiteDiv=parent.document.getElementById("websiteList")//获取遮罩层中id为：websiteList的div
	newWebsiteDiv.appendChild(newDiv);
	$("webName").value="";
	$("webUrl").value="";
	}



var i=1;
function changeDiv(){
	
	if(i==1){
		document.getElementById("di1-1").style.display = "block";
		document.getElementById("di1-2").style.display = "block";
		document.getElementById("di1-3").style.display = "block";
		
		document.getElementById("di2-1").style.display = "none";
		document.getElementById("di2-2").style.display = "none";
		document.getElementById("di2-3").style.display = "none";
		i=2;

	}else{
		document.getElementById("di1-1").style.display = "none";
		document.getElementById("di1-2").style.display = "none";
		document.getElementById("di1-3").style.display = "none";
		
		document.getElementById("di2-1").style.display = "block";
		document.getElementById("di2-2").style.display = "block";
		document.getElementById("di2-3").style.display = "block";
		i=1;
		}

}


function pageScroll()
 {     
  //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）    
  window.scrollBy(0,-100);    
  //延时递归调用，模拟滚动向上效果    
  scrolldelay = setTimeout('pageScroll()',50);    
  //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值    
  var sTop=document.documentElement.scrollTop+document.body.scrollTop;    
  //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）    
  if(sTop==0) clearTimeout(scrolldelay);
 }
 
