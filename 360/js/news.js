// JavaScript Document
function $(id){
	return document.getElementById(id);
}

var timer1;
var num=5;
function addNews(){
	newsAddBarClose();//��������ģ������
	newsAddImgOpen();//���̶�̬ͼƬģ����ʾ
	newsAddNumOpen();//�̶�̬����ģ����ʾ
    timer1=setInterval(newsAddNumChanges,200);//�������ֿ�ʼÿ���1
}


//�������Ű�ť��ʾ
function newsAddBarOpen(){
    $("newsAddBar").className="news-addbar-block";
	$("newsMaxBox").className="news-maxbox-old";
}

//�������Ű�ť����
function newsAddBarClose(){
    $("newsAddBar").className="news-addbar-none";
	$("newsMaxBox").className="news-maxbox-new";
	
}

//���̶�̬ͼƬ��ʾ
function newsAddImgOpen(){
	$("newsAddImg").className="news-adding-img-block";
	setTimeout(newsAddBarOpen,10000);//�������Ű�ťʮ����ٴ���ʾ
	
}

//���̶�̬ͼƬ�ر�
function newsAddImgClose(){
	$("newsAddImg").className="news-adding-img-none";
	
}


//���̶�̬����ģ����ʾ
function newsAddNumOpen(){
	$("newsAddNum").className="news-adding-num-block";
}

//���̶�̬����ģ��ر�
function newsAddNumClose(){
	$("newsAddNum").className="news-adding-num-none";
}

//���ؽ������ֱ仯
function newsAddNumChanges(){
    var addNum=$("newsAddNums");	
	
	addNum.innerHTML=num;
	if(num>1){
	   num--;
	}else if(num==1){
	   num=5;
	   newsAddImgClose();//����ͼƬģ������
       newsAddNumClose();//��������ģ������
	   for(var i=1;i<=3;i++){
		    addnew();
		   }
	    
	   clearInterval(timer1);//����������ֱ仯��ʱ��  
	}
}


//������Ź���
function addnew(){
	
	var newli1=document.createElement('li');
	var newa1=document.createElement('a');
	newa1.innerHTML="�й���";
	newli1.appendChild(newa1);
	var newli2=document.createElement('li');
	
	var newspan2=document.createElement('span');
	newspan2.innerHTML="1��29��";
	newli2.appendChild(newspan2);
	
	var newli3=document.createElement('li');
	var newa2=document.createElement('a');
	newa2.innerHTML="��0";
	newli3.appendChild(newa2);
	
	var newli4=document.createElement('li');
	var newa3=document.createElement('a');
	newa3.innerHTML="��0";
	newli4.appendChild(newa3);
	
	var newli5=document.createElement('li');
	var newa4=document.createElement('a');
	newa4.innerHTML="����";
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
	newspan3.innerHTML="��³���������ų� ����ӡ�ӵ۹��ĳ��ж���,��³���������ų�����֪������ò��ҵõ���ϸ�ĵĹ���,��Ҳ�������������... ����ôһ��ʱ�䰣����������ȫ������ע��Ľ��㡣��ʵ�����Ǳ��������ᷨ���Լ����Ǻܳ����Ķ�����";
	var newa5=document.createElement('a');
	newa5.innerHTML="[����]";
	var newdiv2=document.createElement('div');
	newdiv2.appendChild(newspan3);
	newdiv2.appendChild(newa5);
	newdiv2.className="news-content";
	
	var newspan4=document.createElement('a');
	newspan4.innerHTML="�̵�����ʮ����ʷ�ż�:δ���ʱ��֮��";
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
	newimg1.title="�ر�";
	var idnum=($("newsMaxBox").childNodes.length)-3;
	newimg1.id="newsDelBtn"+idnum;
	//newimg1.onclick=delNews("newsDelBtn"+idnum);
	//newimg1.addEventListener("click", delNews("newsDelBtn"+idnum), false);
	//��һ���º����е���Ҫִ�еķ��������ᱻֱ��ִ��
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
		    clearInterval(timer2); //�رն�ʱ��2	
	      }							
 },20);
	

}


