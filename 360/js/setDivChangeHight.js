// JavaScript Document



var skinTimer;

function $(id){
	return document.getElementById(id);
}


	
var timer1;	//��ʱ��1
var timer2;//��ʱ��2



//��div�����
function toBig(){
	clearInterval(timer2); 
	var obj=$("skin");//div����
	var newHeight=obj.offsetHeight;//��ȡdiv�ĵ�ǰheightֵ�Ҹ�ֵ��newHeight
	
	//��div��heightֵ���ӵ�Ԥ���334pxʱ��ֹͣ���
	if(newHeight<334){
		obj.style.height=(newHeight+10)+"px";
	}else{
	    clearInterval(timer1); 	//�رն�ʱ��2
		$("menubar").className="top-changes";
	}
	
};

//��div��С����
function toSmall(){
	 clearInterval(timer1); 
	var obj=$("skin");
	var newHeight=obj.offsetHeight;
	if(newHeight>0){
		obj.style.height=(newHeight-10)+"px";
	}else{
		 clearInterval(timer2); //�رն�ʱ��2	
		 $("menubar").className="top1";
	}
	
}

//������ʱ��1
function openDiv(){
    timer1=setInterval(toBig,5);
	
	 skinTimerOpen();
	}
//�رն�ʱ��2
function closeDiv(){
    timer2=setInterval(toSmall,5);
	skinTimerClose();
	}
//div͸�����亯��
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
//div͸�����䶨ʱ����ʼ
function skinTimerOpen(){
	skinTimer=setInterval(changeFiter,50);
	}
//div͸�����䶨ʱ���ر�
function skinTimerClose(){
	 clearInterval(skinTimer);
	}


function changeColor(id){
	
	document.body.style.backgroundColor=$(id).style.backgroundColor;
	//$('pageIframe').style.backgroundColor=$(id).style.backgroundColor;
   // $('searchEngines').style.backgroundColor=$(id).style.backgroundColor;

	}


//����Ƥ���б�divHeight�Ӽ��ĺ���
