// JavaScript Document
function $(id){
	return document.getElementById(id);
	}
//iframe����Ӧ�߶Ⱥ���
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






//�ر����ֲ�
function choseAddWebsiteDiv(){

	$("bigDiv").style.display="none";
	$("smallDiv").style.display="none";
	returnWebsite();
	}
//��ʾ���ֲ�(��ΪҪ�ڱ�ҳ��js������iframeҳ����div��onclick�¼����Ͱ�iframeҳ���еķ������ƹ����ˡ���)
function showAddwebsiteDiv1(){
	
	var newbig=document.getElementById("bigDiv");//��ȡiframe��ܸ�ҳ����idΪbigDiv��divԪ��
	
	var newsmall=document.getElementById("smallDiv");
	newbig.style.display="block";
    newsmall.style.display="block";
    document.getElementById("websiteList").innerHTML="";//������ֲ�websiteList�е�����Ԫ�أ������ظ�����Ԫ��
	var newWebsiteDiv=document.getElementById('pageIframe').contentWindow.document.getElementById("websiteList")//��ȡ���ֲ���idΪ��websiteList��div
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


//�ر����ֲ�ʱ�����ֲ��е�website���Ƹ�iframeҳ���е�websiteDIV
function returnWebsite(){
	document.getElementById("pageIframe").contentWindow.document.getElementById("myWebSets").innerHTML="";
   
	var newWebsiteDiv=document.getElementById('pageIframe').contentWindow.document.getElementById('myWebSets')//��ȡiframe��idΪ��myWebSets��div
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
		  addA.innerHTML="�����ַ";
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
	var newWebsiteDiv=parent.document.getElementById("websiteList")//��ȡ���ֲ���idΪ��websiteList��div
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
  //�����ݹ���ָ��������������һ�����������ҹ��������������ڶ������������¹�������������    
  window.scrollBy(0,-100);    
  //��ʱ�ݹ���ã�ģ���������Ч��    
  scrolldelay = setTimeout('pageScroll()',50);    
  //��ȡscrollTopֵ��������DTD�ı�׼��ҳȡdocument.documentElement.scrollTop������ȡdocument.body.scrollTop����Ϊ����ֻ��һ������Ч����һ���ͺ�Ϊ0������ȡ��ֵ���Եõ���ҳ��������scrollTopֵ    
  var sTop=document.documentElement.scrollTop+document.body.scrollTop;    
  //�жϵ�ҳ�浽�ﶥ����ȡ����ʱ���루����ҳ��������������޷��������������ҳ�棩    
  if(sTop==0) clearTimeout(scrolldelay);
 }
 
