// JavaScript Document


var leftmod1Timer;
var leftmod2Timer;
var id="leftBt1";


//ͨ��id��ȡ��ǩ������
function $(id){
	return document.getElementById(id);
	}
var chansCount=1;
//��ʾ��߲��㰮������ģ��
function changebosysOpen(){
	if(chansCount==1){
	   $("changes").style.display="block";
	   chansCount=2;	
	}else{
	    $("changes").style.display="none";
		chansCount=1;
		}
}


function changeMenuBody(id){
	var obj1=$("moreMenu1");
	var obj2=$("moreMenu2");
	var obj3=$("moreMenu3");
	var btn1=$("right2-btn1");
	var btn2=$("right2-btn2");
	var btn3=$("right2-btn3");
	if(id=="rights-toleft"){
		if(obj1.className=="moreMenuShow"){ 
		  obj1.className="moreMenuHidden";
		  obj2.className="moreMenuHidden";
		  obj3.className="moreMenuShow";
		  btn1.className="rights1";
		  btn2.className="rights1";
		  btn3.className="rights2";
		}else if(obj2.className=="moreMenuShow"){ 
		  obj1.className="moreMenuShow";
		  obj2.className="moreMenuHidden";
		  obj3.className="moreMenuHidden";
		  btn1.className="rights2";
		  btn2.className="rights1";
		  btn3.className="rights1";
		}else if(obj3.className=="moreMenuShow"){ 
		  obj1.className="moreMenuHidden";
		  obj2.className="moreMenuShow";
		  obj3.className="moreMenuHidden";
		  btn1.className="rights1";
		  btn2.className="rights2";
		  btn3.className="rights1";
		}
	}else if(id=="rights-toright"){
		if(obj1.className=="moreMenuShow"){ 
	
		  obj1.className="moreMenuHidden";
		  obj2.className="moreMenuShow";
		  obj3.className="moreMenuHidden";
		  btn1.className="rights1";
		  btn2.className="rights2";
		  btn3.className="rights1";
		}else if(obj2.className=="moreMenuShow"){ 
		  obj1.className="moreMenuHidden";
		  obj2.className="moreMenuHidden";
		  obj3.className="moreMenuShow";
		  btn1.className="rights1";
		  btn2.className="rights1";
		  btn3.className="rights2";
		}else if(obj3.className=="moreMenuShow"){ 
		  obj1.className="moreMenuShow";
		  obj2.className="moreMenuHidden";
		  obj3.className="moreMenuHidden";
		  btn1.className="rights2";
		  btn2.className="rights1";
		  btn3.className="rights1";
		}
	}
	}


function modImgChange(id){
	
	var img1=$("mod1-1-1");
	var img2=$("mod1-1-2");
	var img3=$("mod1-1-3");
	var img4=$("mod1-1-4");
	
	if(id=="mbLeftBtn"){
		if(img1.className=="img-mod-show"){
		   $("mod1-1-1").className="img-mod-none";
		   $("mod1-1-2").className="img-mod-none";
		   $("mod1-1-3").className="img-mod-none";
		   $("mod1-1-4").className="img-mod-show";
		}else if(img2.className=="img-mod-show"){
		   img1.className="img-mod-show";
		   img2.className="img-mod-none";
		   img3.className="img-mod-none";
		   img4.className="img-mod-none";
		}else if(img3.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-show";
		   img3.className="img-mod-none";
		   img4.className="img-mod-none";
		}else if(img4.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-none";
		   img3.className="img-mod-show";
		   img4.className="img-mod-none";
		}
    }else if(id=="mbRightBtn"){
		   if(img1.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-show";
		   img3.className="img-mod-none";
		   img4.className="img-mod-none";
		   }else if(img2.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-none";
		   img3.className="img-mod-show";
		   img4.className="img-mod-none";
		   }else if(img3.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-none";
		   img3.className="img-mod-none";
		   img4.className="img-mod-show";
		   }else if(img4.className=="img-mod-show"){
		   img1.className="img-mod-show";
		   img2.className="img-mod-none";
		   img3.className="img-mod-none";
		   img4.className="img-mod-none";
		}
	}
}


function divOnmouseover(id){
	$(id).className="changeBodyBtns2";
}

function divOnmouseout(id){
	$(id).className="changeBodyBtns";
}

//�������ͼƬģ���з���ť��͸����
function imgBtnOn(id){
	if(id=="mbLeftBtn"){
		$(id).className="modImgLeftBtn2";
	}else if(id=="mbRightBtn"){
		$(id).className="modImgRightBtn2";
    }
}

//�������ͼƬģ���з���ť��͸����
function imgBtnOut(id){
	if(id=="mbLeftBtn"){
		$(id).className="modImgLeftBtn1";
	}else if(id=="mbRightBtn"){
		$(id).className="modImgRightBtn1";
    }
}

function leftBtnOn(id){
	$(id).style.backgroundColor="#CCCCCC";
	$(id).style.fontSize=16+"px";
	}
function leftBtnOut(id){
	$(id).style.backgroundColor="#FFFFFF";
	$(id).style.fontSize=12+"px";
	}	
	
	
function leftBtnClick(id){
	if(id=="leftBt1"){
	     $(id).className="leftModTopBtn2";
	     if($("leftBt2").className=="leftModTopBtn2"){ $("leftBt2").className="leftModTopBtn1"}
	     if($("leftBt3").className=="leftModTopBtn2"){ $("leftBt3").className="leftModTopBtn1"}
	     if($("leftBt4").className=="leftModTopBtn2"){ $("leftBt4").className="leftModTopBtn1"}
		 if($("left-Mod1-1").className=="leftModBody-None"){$("left-Mod1-1").className="leftModBody-Block"}
		 if($("left-Mod1-2").className=="leftModBody-Block"){$("left-Mod1-2").className="leftModBody-None"}
		 if($("left-Mod1-3").className=="leftModBody-Block"){$("left-Mod1-3").className="leftModBody-None"}
		 if($("left-Mod1-4").className=="leftModBody-Block"){$("left-Mod1-4").className="leftModBody-None"}
	}else if(id=="leftBt2"){
		 $(id).className="leftModTopBtn2";
	     if($("leftBt1").className=="leftModTopBtn2"){ $("leftBt1").className="leftModTopBtn1"}
	     if($("leftBt3").className=="leftModTopBtn2"){ $("leftBt3").className="leftModTopBtn1"}
	     if($("leftBt4").className=="leftModTopBtn2"){ $("leftBt4").className="leftModTopBtn1"}
		 if($("left-Mod1-1").className=="leftModBody-Block"){$("left-Mod1-1").className="leftModBody-None"}
		 if($("left-Mod1-2").className=="leftModBody-None"){$("left-Mod1-2").className="leftModBody-Block"}
		 if($("left-Mod1-3").className=="leftModBody-Block"){$("left-Mod1-3").className="leftModBody-None"}
		 if($("left-Mod1-4").className=="leftModBody-Block"){$("left-Mod1-4").className="leftModBody-None"}
	}else if(id=="leftBt3"){
		 $(id).className="leftModTopBtn2";
	     if($("leftBt1").className=="leftModTopBtn2"){ $("leftBt1").className="leftModTopBtn1"}
	     if($("leftBt2").className=="leftModTopBtn2"){ $("leftBt2").className="leftModTopBtn1"}
	     if($("leftBt4").className=="leftModTopBtn2"){ $("leftBt4").className="leftModTopBtn1"}
		 if($("left-Mod1-1").className=="leftModBody-Block"){$("left-Mod1-1").className="leftModBody-None"}
		 if($("left-Mod1-2").className=="leftModBody-Block"){$("left-Mod1-2").className="leftModBody-None"}
		 if($("left-Mod1-3").className=="leftModBody-None"){$("left-Mod1-3").className="leftModBody-Block"}
		 if($("left-Mod1-4").className=="leftModBody-Block"){$("left-Mod1-4").className="leftModBody-None"}
	}else if(id=="leftBt4"){
		 $(id).className="leftModTopBtn2";
	     if($("leftBt1").className=="leftModTopBtn2"){ $("leftBt1").className="leftModTopBtn1"}
	     if($("leftBt2").className=="leftModTopBtn2"){ $("leftBt2").className="leftModTopBtn1"}
	     if($("leftBt3").className=="leftModTopBtn2"){ $("leftBt3").className="leftModTopBtn1"}
		 if($("left-Mod1-1").className=="leftModBody-Block"){$("left-Mod1-1").className="leftModBody-None"}
		 if($("left-Mod1-2").className=="leftModBody-Block"){$("left-Mod1-2").className="leftModBody-None"}
		 if($("left-Mod1-3").className=="leftModBody-Block"){$("left-Mod1-3").className="leftModBody-None"}
		 if($("left-Mod1-4").className=="leftModBody-None"){$("left-Mod1-4").className="leftModBody-Block"}
		}
	
	}


function change(){
	
    if(id=="leftBt1"){
	    id="leftBt2";	
    }else if(id=="leftBt2"){
		id="leftBt3";
	}else if(id=="leftBt3"){
		id="leftBt4";
	}else if(id=="leftBt4"){
		id="leftBt1";
	}
	leftBtnClick(id);

}
//ģ��ѡ��Զ��л���ʱ������
function timer1(){
	leftmod1Timer=setInterval(change,2000);
	leftmod2Timer=setInterval(changeDiv,3000);
	}
function timer1Close(){
	 clearInterval(leftmod1Timer);
	}

function timer1Open(){
	leftmod1Timer=setInterval(change,2000);
	
	}



//��ʾ���ͼƬģ��ķ���ť
function imgBtnOpen(id1,id2){
	$(id1).style.display="block";
	$(id2).style.display="block";
	}
//�������ͼƬģ��ķ���ť
function imgBtnClose(id1,id2){
	$(id1).style.display="none";
	$(id2).style.display="none";
	}


//////////////////////////////////////////////////////////////////1-2/////////////////////////////////////////////////////////////////////////////

//�������ͼƬģ���з���ť��͸����
function imgBtnOn2(id){
	if(id=="mbLeftBtn2"){
		$(id).className="modImgLeftBtn2";
	}else if(id=="mbRightBtn2"){
		$(id).className="modImgRightBtn2";
    }
}

//�������ͼƬģ���з���ť��͸����
function imgBtnOut2(id){
	if(id=="mbLeftBtn2"){
		$(id).className="modImgLeftBtn1";
	}else if(id=="mbRightBtn2"){
		$(id).className="modImgRightBtn1";
    }
}


function modImgChange2(id){
	
	var img1=$("mod1-2-1");
	var img2=$("mod1-2-2");
	var img3=$("mod1-2-3");
	var img4=$("mod1-2-4");
	
	if(id=="mbLeftBtn2"){
		if(img1.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-none";
		   img3.className="img-mod-none";
		   img4.className="img-mod-show";
		}else if(img2.className=="img-mod-show"){
		   img1.className="img-mod-show";
		   img2.className="img-mod-none";
		   img3.className="img-mod-none";
		   img4.className="img-mod-none";
		}else if(img3.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-show";
		   img3.className="img-mod-none";
		   img4.className="img-mod-none";
		}else if(img4.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-none";
		   img3.className="img-mod-show";
		   img4.className="img-mod-none";
		}
    }else if(id=="mbRightBtn2"){
		   if(img1.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-show";
		   img3.className="img-mod-none";
		   img4.className="img-mod-none";
		   }else if(img2.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-none";
		   img3.className="img-mod-show";
		   img4.className="img-mod-none";
		   }else if(img3.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-none";
		   img3.className="img-mod-none";
		   img4.className="img-mod-show";
		   }else if(img4.className=="img-mod-show"){
		   img1.className="img-mod-show";
		   img2.className="img-mod-none";
		   img3.className="img-mod-none";
		   img4.className="img-mod-none";
		}
	}
}
///////////////////////////////////////////////////////////////////////1-3///////////////////////////////////////////////////////////////////////////
//�������ͼƬģ���з���ť��͸����
function imgBtnOn3(id){
	if(id=="mbLeftBtn3"){
		$(id).className="modImgLeftBtn2";
	}else if(id=="mbRightBtn3"){
		$(id).className="modImgRightBtn2";
    }
}

//�������ͼƬģ���з���ť��͸����
function imgBtnOut3(id){
	if(id=="mbLeftBtn3"){
		$(id).className="modImgLeftBtn1";
	}else if(id=="mbRightBtn3"){
		$(id).className="modImgRightBtn1";
    }
}


function modImgChange3(id){
	
	var img1=$("mod1-3-1");
	var img2=$("mod1-3-2");
	var img3=$("mod1-3-3");
	
	
	if(id=="mbLeftBtn3"){
		if(img1.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-none";
		   img3.className="img-mod-show";
		 
		}else if(img2.className=="img-mod-show"){
		   img1.className="img-mod-show";
		   img2.className="img-mod-none";
		   img3.className="img-mod-none";
		 
		}else if(img3.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-show";
		   img3.className="img-mod-none";
		 
		}
    }else if(id=="mbRightBtn3"){
		   if(img1.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-show";
		   img3.className="img-mod-none";
		   
		   }else if(img2.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-none";
		   img3.className="img-mod-show";
		  
		   }else if(img3.className=="img-mod-show"){
		   img1.className="img-mod-show";
		   img2.className="img-mod-none";
		   img3.className="img-mod-none";
		  
		   }
	}
}





//////////////////////////////////////////////////////////////////////1-4/////////////////////////////////////////////////////////////////////////////



//�������ͼƬģ���з���ť��͸����
function imgBtnOn3(id){
	if(id=="mbLeftBtn3"){
		$(id).className="modImgLeftBtn2";
	}else if(id=="mbRightBtn3"){
		$(id).className="modImgRightBtn2";
    }
}

//�������ͼƬģ���з���ť��͸����
function imgBtnOut4(id){
	if(id=="mbLeftBtn4"){
		$(id).className="modImgLeftBtn1";
	}else if(id=="mbRightBtn4"){
		$(id).className="modImgRightBtn1";
    }
}


function modImgChange4(id){
	
	var img1=$("mod1-4-1");
	var img2=$("mod1-4-2");
	var img3=$("mod1-4-3");
	
	
	if(id=="mbLeftBtn4"){
		if(img1.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-none";
		   img3.className="img-mod-show";
		 
		}else if(img2.className=="img-mod-show"){
		   img1.className="img-mod-show";
		   img2.className="img-mod-none";
		   img3.className="img-mod-none";
		 
		}else if(img3.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-show";
		   img3.className="img-mod-none";
		 
		}
    }else if(id=="mbRightBtn4"){
		   if(img1.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-show";
		   img3.className="img-mod-none";
		   
		   }else if(img2.className=="img-mod-show"){
		   img1.className="img-mod-none";
		   img2.className="img-mod-none";
		   img3.className="img-mod-show";
		  
		   }else if(img3.className=="img-mod-show"){
		   img1.className="img-mod-show";
		   img2.className="img-mod-none";
		   img3.className="img-mod-none";
		  
		   }
	}
}





//��ʾ���ֲ�
function showAddwebsiteDiv(){
	
	var newbig=parent.document.getElementById("bigDiv");//��ȡiframe��ܸ�ҳ����idΪbigDiv��divԪ��
	
	var newsmall=parent.document.getElementById("smallDiv");
	newbig.style.display="block";
    newsmall.style.display="block";
    parent.document.getElementById("websiteList").innerHTML="";//������ֲ�websiteList�е�����Ԫ�أ������ظ�����Ԫ��
	var newWebsiteDiv=parent.document.getElementById("websiteList")//��ȡ���ֲ���idΪ��websiteList��div
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
	   
	}

function showChangeBtn(){
	 clearInterval(leftmod2Timer);
	 $("changeBtnLeft").style.display = 'block';
	 $("changeBtnRight").style.display = 'block';
}

function hideChangeBtn(){
	 $("changeBtnLeft").style.display = 'none';
	 $("changeBtnRight").style.display = 'none';
	leftmod2Timer=setInterval(changeDiv,3000);
}

//ͼƬ����ͨ��onclinkʱ���ֻ�
var i=1;
function changeDiv(){
	
	if(i==1){
		 $("di1-1").style.display = "block";
		 $("di1-2").style.display = "block";
		 $("di1-3").style.display = "block";
		
		 $("di2-1").style.display = "none";
		 $("di2-2").style.display = "none";
		 $("di2-3").style.display = "none";
		i=2;

	}else{
		 $("di1-1").style.display = "none";
		 $("di1-2").style.display = "none";
		 $("di1-3").style.display = "none";
		
		 $("di2-1").style.display = "block";
		 $("di2-2").style.display = "block";
		 $("di2-3").style.display = "block";
		i=1;
		}	
}
var obj;
function changeBtnOver(id){
	obj=$(id);
	obj.style.backgroundColor="#CCCCCC";
	}

function changeBtnOut(id){
	obj=$(id);
	obj.style.backgroundColor="#FFFFFF";
	}


//�ı�button��oncmouseover��ʽ
//id:button��id
function changeBtnClick(id){
	
	
	var str=id;
	
	if(str=="mylTitle1"){
		
		changeStyleById("mylTitle1");
		returnStyleById("mylTitle2");
		returnStyleById("mylTitle3");
		returnStyleById("mylTitle4");
	}else if(str=="mylTitle2"){
		returnStyleById("mylTitle1");
		changeStyleById("mylTitle2");
		returnStyleById("mylTitle3");
		returnStyleById("mylTitle4");
	}else if(str=="mylTitle3"){
		returnStyleById("mylTitle1");
		returnStyleById("mylTitle2");
		changeStyleById("mylTitle3");
		returnStyleById("mylTitle4");
	}else if(str=="mylTitle4"){
		returnStyleById("mylTitle1");
		returnStyleById("mylTitle2");
		returnStyleById("mylTitle3");
		changeStyleById("mylTitle4");
	}
	
}

function changeStyleById(id){
	    obj=$(id);
	
		obj.style.borderTopWidth=2+"px";
		obj.style.borderTopColor="#3EAF0E"
		obj.style.borderBottomWidth=0+"px";
		obj.style.height=newHeight+"px";

	}
function returnStyleById(id){
	obj=$(id);
	
	obj.style.borderTopWidth=1+"px";
	obj.style.borderTopColor="#003E87"
	obj.style.borderBottomWidth=1+"px";
	
	}


function changeBtnOut(id){
	var obj=$(id);
	obj.style.borderTopWidth=1+"px";
	obj.style.borderTopColor="#999999"
	obj.style.borderBottomWidth=1+"px";

	}

function relaxDivOver(id){
	obj=$(id);

	obj.style.textDecoration="underline";
	obj.style.color="#FF0000";
	}
function relaxDivOut(id){
	obj=$(id);

	obj.style.textDecoration="none";
	obj.style.color="#000000";
	}
	
	

//����Ƶģ�����Ͻ�Hot����ͼƬ�л�����
function changeHot1Img(id){
	var obj1=$("hots1-1");
	var obj2=$("hots1-2");
	var obj3=$("hots1-3");
	if(id=="hot1btn-left"){
	   if(obj1.className=="hotStyle1"){
		   obj1.className="hotStyle2";
		   obj2.className="hotStyle2";
		   obj3.className="hotStyle1";
	   }else if(obj2.className=="hotStyle1"){
		   obj1.className="hotStyle1";
		   obj2.className="hotStyle2";
		   obj3.className="hotStyle2";
	   }else if(obj3.className=="hotStyle1"){
		   obj1.className="hotStyle2";
		   obj2.className="hotStyle1";
		   obj3.className="hotStyle2";
	   }
	}else if(id=="hot1btn-right"){
	    if(obj1.className=="hotStyle1"){
		   obj1.className="hotStyle2";
		   obj2.className="hotStyle1";
		   obj3.className="hotStyle2";
	   }else if(obj2.className=="hotStyle1"){
		   obj1.className="hotStyle2";
		   obj2.className="hotStyle2";
		   obj3.className="hotStyle1";
	   }else if(obj3.className=="hotStyle1"){
		   obj1.className="hotStyle1";
		   obj2.className="hotStyle2";
		   obj3.className="hotStyle2";
	   }
	}
}

//����Ƶģ�����Ͻ�Hot����ͼƬ�л���ť��ʾ
function hotBtnShow(){
	$("hot1btn-left").style.display="block";
	$("hot1btn-right").style.display="block";
	}

//����Ƶģ�����Ͻ�Hot����ͼƬ�л���ť����
function hotBtnHidden(){
	$("hot1btn-left").style.display="none";
	$("hot1btn-right").style.display="none";
	}













	
//relaxģ��˵�onclick����
function changeRelaxBodyStyle(id){
	changeRelaxMenuOver(id);
	var obj1=$("relaxBody1");
	var obj2=$("relaxBody2");
	var obj3=$("relaxBody3");
	if(id=="relax1"){
		changeRelaxMenuOver("relax1")
		obj1.style.display="block";
		obj2.style.display="none";
		obj3.style.display="none";
	}else if(id=="relax2"){
		obj1.style.display="none";
		obj2.style.display="block";
		obj3.style.display="none";
		changeRelaxMenuOver("relax2")
	}else if(id=="relax3"){
		obj1.style.display="none";
		obj2.style.display="none";
		obj3.style.display="block";
	}
}
//relaxģ��:�˵�oncmouseover����
function changeRelaxMenuOver(id){
	
    obj=$(id);
	obj.style.borderBottomStyle="solid";
	obj.style.borderBottomWidth=2+"px";
	obj.style.borderBottomColor="#3EAF0E";
	
}

//relaxģ��:�˵�oncmouseout����
function changeRelaxMenuOut(id){
    obj=$(id);
	
	obj.style.border="none";
}

//relaxģ��body1���������ҷ���ťonmouseover�¼�
function relaxBodyLeftOver(id){
	$(id).style.backgroundColor="#CCCCCC";
	
	}

//relaxģ��body1���������ҷ���ťonmouseout�¼�
function relaxBodyLeftOut(id){
	$(id).style.backgroundColor="#FFFFFF";
	
	}
//relaxģ��body1��������ťonclick�¼�
var n=1;
function toChange(){
	var obj1=$("relaxBodyCenterDiv1");
	var obj2=$("relaxBodyCenterDiv2");
		
	if(n==1){
		
		obj1.style.display="none";
		obj2.style.display="block";
	
		n=2;
	}else if(n==2){
		obj1.style.display="block";
		obj2.style.display="none";
		n=1;
	}
}





function vidioRightchanges(id){
	if(id=="tvbt"){
		if($(id).className=="vdrightLi1"){$(id).className="vdrightLi2"}
		if($("mvbt").className=="vdrightLi2"){$("mvbt").className="vdrightLi1"}
		if($("vrbt").className=="vdrightLi2"){$("vrbt").className="vdrightLi1"}
		if($("vdBody1").className=="vdbody2"){$("vdBody1").className="vdbody1"}
		if($("vdBody2").className=="vdbody1"){$("vdBody2").className="vdbody2"}
		if($("vdBody3").className=="vdbody1"){$("vdBody3").className="vdbody2"}
		
	}else if(id=="mvbt"){
		if($(id).className=="vdrightLi1"){$(id).className="vdrightLi2"}	
		if($("tvbt").className=="vdrightLi2"){$("tvbt").className="vdrightLi1"}
		if($("vrbt").className=="vdrightLi2"){$("vrbt").className="vdrightLi1"}
		if($("vdBody1").className=="vdbody1"){$("vdBody1").className="vdbody2"}
		if($("vdBody2").className=="vdbody2"){$("vdBody2").className="vdbody1"}
		if($("vdBody3").className=="vdbody1"){$("vdBody3").className="vdbody2"}
		
	}else if(id=="vrbt"){
		if($(id).className=="vdrightLi1"){$(id).className="vdrightLi2"}	
		if($("tvbt").className=="vdrightLi2"){$("tvbt").className="vdrightLi1"}
		if($("mvbt").className=="vdrightLi2"){$("mvbt").className="vdrightLi1"}
		if($("vdBody1").className=="vdbody1"){$("vdBody1").className="vdbody2"}
		if($("vdBody2").className=="vdbody1"){$("vdBody2").className="vdbody2"}
		if($("vdBody3").className=="vdbody2"){$("vdBody3").className="vdbody1"}
		
	}
	}

























