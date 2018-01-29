window.onload=function(){
	var l1 = document.getElementById("l1");
	var l2 = document.getElementById("l2");
	var l3 = document.getElementById("l3");
	var l4 = document.getElementById("l4");
	var denglu = document.getElementById("kw1_eight");
	if(localStorage.a){
		denglu.innerHTML = localStorage.a;
		l1.style.display = 'none';
		l2.style.display = 'none';
		l3.style.display = 'none';
		l4.style.display = 'block';
	}else{
		denglu.innerHTML="登录&emsp;&nu;";
	}
denglu.onmouseover=function(){
	if(localStorage.a){
		denglu.innerHTML = localStorage.a;
		l1.style.display = 'none';
		l2.style.display = 'none';
		l3.style.display = 'none';
		l4.style.display = 'block';
	}else{
		denglu.innerHTML="登录&emsp;&nu;";
	}
}
	
denglu.onmouseout=function(){
	if(localStorage.a){
		denglu.innerHTML = localStorage.a;
		l1.style.display = 'none';
		l2.style.display = 'none';
		l3.style.display = 'none';
		l4.style.display = 'block';
	}else{
		denglu.innerHTML="登录&emsp;&and;";
	}
}
				
				var textArr=[
			        {"title":'酷我音乐盒',"content":'音乐共享版震撼来袭'},
			        {"title":'歌手 第二季',"content":'第二期'},
			        {"title":'梦想的声音',"content":'第十二期'},
			        {"title":'声临其境',"content":'全国首档原创声音魅力竞演真人秀节目'},
			        {"title":'还没正式出名',"content":'却已正式出家'},
			        {"title":'COCO李玟18巡演',"content":'3月24日重庆国际博览中心'},
			        {"title":'激情演绎热辣新歌曲',"content":'不容错过的绝美女声'},
			        {"title":'母带音频',"content":'震撼首发'},
			        {"title":'酷我音乐盒',"content":'音乐共享版震撼来袭'}
				]


//歌曲搜索
				var inputs=document.querySelector('.kw1_five input');
				var kw1_five=document.getElementsByClassName('kw1_five')[0];
				var uls1=document.querySelector('.kw1_five ul');
				var lis1=kw1_five.getElementsByTagName('li');
				
				var listd=null;
				document.onclick=function(){
					for(var o=0;o<lis1.length;o++){
						lis1[o].style.display='none';
					}
				}
		inputs.oninput = function() {
			var val2 = inputs.value;
				for(var o = 0; o < lis1.length; o++) {
				lis1[o].innerHTML = '';
				lis1[o].style.display = 'none';
			}
			console.log(lis1)
			jsonp({
				url: "http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.6.5.0&method=baidu.ting.search.merge&format=json&query=" + val2 + "&page_no=1&page_size=50&type=-1&data_source=0&use_cluster=1",
				data: {
					q: val2
				},
				success: function(data) {
					console.log(data);
					list1(data)
				}
			});
		}
				
	function list1(data) {
		for(var o = 0; o < lis1.length; o++) {
			if(data.result.song_info.song_list[o]) {
				lis1[o].style.display = 'block';
				lis1[o].innerHTML = data.result.song_info.song_list[o].title;
				lis1[o].setAttribute('song', data.result.song_info.song_list[o].album_id);

			}
		}
	}
	
	var lis1 = kw1_five.getElementsByTagName('li');
			console.log(lis1)
	console.log(lis1)
	var lis1 = kw1_five.getElementsByTagName('li');
			console.log(lis1)
	console.log(lis1)
	for(var i = 0; i < lis1.length; i++) {
		lis1[i].onclick = function(ev) {
			var son = this.getAttribute('song');
			window.localStorage.album=son;
			window.location = 'xiangqing2.html';
		}
	}



//张博
var spans=document.querySelectorAll('.kw_6 span');
				
				
				var p0=document.getElementById("p0");
				var p1=document.getElementById("p1");
				var p2=document.getElementById("p2");
				var p3=document.getElementById("p3");
				var p4=document.getElementById("p4");
				var p5=document.getElementById("p5");
				var p6=document.getElementById("p6");
				var p7=document.getElementById("p7");
				var p8=document.getElementById("p8");
				var p9=document.getElementById("p9");
				var p10=document.getElementById("p10");
				var p11=document.getElementById("p11");
				var p12=document.getElementById("p12");
				
				console.log(spans);
				spans[0].onmouseenter=function(){
					this.style.backgroundPosition='-73px -149px';
				}
				
				spans[2].onmouseenter=function(){
					
					this.style.backgroundPosition='-202px -150px';
				}
				spans[3].onmouseenter=function(){
					
					this.style.backgroundPosition='-0.4px -83px';
				}
				spans[4].onmouseenter=function(){
					
					this.style.backgroundPosition='-263px -127.5px';
				}
					//方法一
					var V1=1;
					var B1=29;
					var M1=30;
					
				
				var p5=document.getElementById("p5");
					var p11=document.getElementById("p11");
					var A=1;
				spans[5].onmouseenter=function(){
					if(A==1){
						this.style.backgroundPosition='-44px -109px';
						p5.innerHTML='顺序播放';
					}
					if(A==2){
						
						this.style.backgroundPosition='-44px -139px';
						p5.innerHTML='单曲循环';
					}
					if(A==3){
						this.style.backgroundPosition='-43px -169px';
						p5.innerHTML='顺序循环';
					}
					if(A==4){
						this.style.backgroundPosition='-44px -199px';
						p5.innerHTML='随机播放';
					}
					this.onclick=function(){
						A++;
						if(A>4){
							A=1;
						}
					if(A==1){
						this.style.backgroundPosition='-44px -109px';
						p5.innerHTML='顺序播放';
					}
					if(A==2){
						
						this.style.backgroundPosition='-44px -139px';
						p5.innerHTML='单曲循环';
					}
					if(A==3){
						this.style.backgroundPosition='-43px -169px';
						p5.innerHTML='顺序循环';
					}
					if(A==4){
						this.style.backgroundPosition='-44px -199px';
						p5.innerHTML='随机播放';
					}
						
						
					}
				}
				
				spans[5].onmouseout=function(){
					if(A==1){
						this.style.backgroundPosition='-15px -109px';
						
					}
					if(A==2){
						
						this.style.backgroundPosition='-15px -139px';
					}
					if(A==3){
						this.style.backgroundPosition='-14px -169px';
					}
					if(A==4){
						this.style.backgroundPosition='-15px -199px';
					}
					
				}
				
				
				
				
				
				
					
				
				spans[6].onmouseenter=function(){
					
					this.style.backgroundPosition='-20px -57px';
				}
				var fbox=document.getElementById("fbox");
				var p12=document.getElementById("p12");
				p12.onclick=function(){
					fbox.style.display='none';
					p12.style.display='none';
				}
				spans[7].onmouseenter=function(){
					this.style.backgroundPosition='-68px -57.5px';
					var fbox=document.getElementById("fbox");
					var p12=document.getElementById("p12");
					var btn=true;
					spans[7].onclick=function(){
						if(btn==true){
						fbox.style.display='block';
						p12.style.display='block';
						
						}else{
							p12.style.display='none';
							fbox.style.display='none';
						}
						btn=!btn;
					}
					
				}
				spans[8].onmouseenter=function(){
					
					this.style.backgroundPosition='-237.5px -136px';
				}
				spans[9].onmouseenter=function(){
					
					this.style.backgroundPosition='-45px -58.5px';
					
				}
				spans[10].onmouseenter=function(){
					
					this.style.backgroundPosition='1px -58px';
					
				}
				spans[0].onmouseleave=function(){
					this.style.backgroundPosition='-73px -110px';
				}
				
				spans[2].onmouseleave=function(){
					
					this.style.backgroundPosition='-202px -110px';
				}
				spans[3].onmouseleave=function(){
					
					this.style.backgroundPosition='-54.2px -83px';
				}
				spans[4].onmouseleave=function(){
					
					this.style.backgroundPosition='-263px -111px';
				}
				
				
				spans[6].onmouseleave=function(){
					
					this.style.backgroundPosition='-20px -32px';
				}
				spans[7].onmouseleave=function(){
					
					this.style.backgroundPosition='-68px -32.5px';
				
				}
				spans[8].onmouseleave=function(){
					
					this.style.backgroundPosition='-237.5px -112px';
				}
				spans[9].onmouseleave=function(){
					this.style.backgroundPosition='-45px -33.5px';
					
				}
				spans[10].onmouseleave=function(){
					
					this.style.backgroundPosition='1px -33px';
					
				}
				var kai=true;
				spans[1].onmouseenter=function(){
					if(kai==true){
						this.style.backgroundPosition='-137px -152px';
					}else{
						this.style.backgroundPosition='-178.5px -193px';
					}
					this.onclick=function(){
						if(kai==true){
							this.style.backgroundPosition='-178.5px -193px';
						}else{
							this.style.backgroundPosition='-137px -152px';
						}
						kai=!kai;
					}
				}
				
				spans[1].onmouseleave=function(){
					if(kai==true){
						this.style.backgroundPosition='-137px -112px';
					}else{
						this.style.backgroundPosition='-138px -193px';
					}
				}
				
				
				
				
				
				
				
				
			var xk=document.getElementById("xk");
			var xk2=document.getElementById("xk2");
			var ppp1=document.getElementById("ppp1");
			var ppp22=document.getElementById("ppp22");
			ppp1.onclick=function(){
				xk.style.display='block';
				xk2.style.display='none';
				ppp1.style.background='rgba(0,255,50,0.7)'
				ppp22.style.background='rgba(0,0,0,1)'
			}
			ppp22.onclick=function(){
				xk.style.display='none';
				xk2.style.display='block';
				ppp1.style.background='rgba(0,0,0,1)'
				ppp22.style.background='rgba(0,255,50,0.7)'
			}
			
		
		
		
		
		
		var semail=document.getElementById("signin-email");
		var pas=document.getElementById("pas");
		var semail2=document.getElementById("signin2-email");
		var pas2=document.getElementById("pas2");
		var dls2=document.getElementById("dls2");
		var dls2t=document.getElementById("dls2t");
		
		var yz1=document.getElementById("yz1");
		var yz2=document.getElementById("yz2");
		var yz3=document.getElementById("yz3");
		var yz4=document.getElementById("yz4");
		var yz5=document.getElementById("yz5");
		
		semail.onblur=function(){
		var email=/^\d{5,12}@[qQ][qQ]\.com$/;
			 if(semail.value==''||semail.value==null){
				yz1.innerHTML='E-mail  不能为空';
				yz1.style.color='white';
				yz1.style.display='block';
				yz2.style.display='none';
				yz3.style.display='none';
				yz4.style.display='none';
				yz5.style.display='none';
				yz2.innerHTML='';
				yz3.innerHTML='';
				yz4.innerHTML='';
				yz5.innerHTML='';
			}
			else if(!email.test(semail.value)){
				yz1.innerHTML='E-mail  格式错误';
				yz1.style.color='white';
				yz1.style.display='block';
				yz2.style.display='none';
				yz3.style.display='none';
				yz4.style.display='none';
				yz5.style.display='none';
				yz2.innerHTML='';
				yz3.innerHTML='';
				yz4.innerHTML='';
				yz5.innerHTML='';
			}
			else{
				yz1.innerHTML='正确';
				yz1.style.color='white';
				yz1.style.display='block';
				yz2.style.display='none';
				yz3.style.display='none';
				yz4.style.display='none';
				yz5.style.display='none';
			}
		}
		semail2.onblur=function(){
		var email=/^\d{5,12}@[qQ][qQ]\.com$/;
			 if(semail2.value==''||semail2.value==null){
				yz4.innerHTML='E-mail  不能为空';
				yz4.style.color='white';
				yz2.innerHTML='';
				yz3.innerHTML='';
				yz1.innerHTML='';
				yz5.innerHTML='';
				yz4.style.display='block';
				yz2.style.display='none';
				yz3.style.display='none';
				yz1.style.display='none';
				yz5.style.display='none';
			}
			else if(!email.test(semail2.value)){
				yz4.innerHTML='E-mail  格式错误';
				yz4.style.color='white';
				yz2.innerHTML='';
				yz3.innerHTML='';
				yz1.innerHTML='';
				yz5.innerHTML='';
				yz4.style.display='block';
				yz2.style.display='none';
				yz3.style.display='none';
				yz1.style.display='none';
				yz5.style.display='none';
			}
			
			else{
				yz4.innerHTML='正确';
				yz4.style.color='white';
				yz4.style.display='block';
				yz2.style.display='none';
				yz3.style.display='none';
				yz1.style.display='none';
				yz5.style.display='none';
			}
		}
		pas.onblur=function(){
			var email=/^\d{5,12}$/;
			 if(pas.value==''||pas.value==null){
				yz2.innerHTML='Password  不能为空';
				yz2.style.color='white';
				yz1.innerHTML='';
				yz3.innerHTML='';
				yz4.innerHTML='';
				yz5.innerHTML='';
				yz2.style.display='block';
				yz4.style.display='none';
				yz3.style.display='none';
				yz1.style.display='none';
				yz5.style.display='none';
			}
			else if(!email.test(pas.value)){
				yz2.innerHTML='Password  格式错误';
				yz2.style.color='white';
				yz1.innerHTML='';
				yz3.innerHTML='';
				yz4.innerHTML='';
				yz5.innerHTML='';
				yz2.style.display='block';
				yz4.style.display='none';
				yz3.style.display='none';
				yz1.style.display='none';
				yz5.style.display='none';
			}
			else if(pas2.value==localStorage.c){
				alert(localStorage.c);
				yz2.innerHTML='正确';
				yz2.style.color='white';
				yz2.style.display='block';
				yz4.style.display='none';
				yz3.style.display='none';
				yz1.style.display='none';
				yz5.style.display='none';
			}
		}
		pas2.onblur=function(){
			var email=/^\d{5,12}$/;
			 if(pas2.value==''||pas2.value==null){
				yz5.innerHTML='Password  不能为空';
				yz5.style.color='white';
				yz2.innerHTML='';
				yz3.innerHTML='';
				yz4.innerHTML='';
				yz1.innerHTML='';
				yz5.style.display='block';
				yz4.style.display='none';
				yz3.style.display='none';
				yz1.style.display='none';
				yz2.style.display='none';
			}
			else if(!email.test(pas2.value)){
				yz5.innerHTML='Password  格式错误';
				yz5.style.color='white';
				yz2.innerHTML='';
				yz3.innerHTML='';
				yz4.innerHTML='';
				yz1.innerHTML='';
				yz5.style.display='block';
				yz4.style.display='none';
				yz3.style.display='none';
				yz1.style.display='none';
				yz2.style.display='none';
			}
			else {
				
				yz5.innerHTML='正确';
				yz5.style.color='white';
				yz5.style.display='block';
				yz4.style.display='none';
				yz3.style.display='none';
				yz1.style.display='none';
				yz2.style.display='none';
			}
		}
		var word=true;
		dls2.onclick=function(){
			if(word==true){
				
			pas.type='text';
			dls2.innerHTML='Show';
			word=false;
			}
			else{
			pas.type='password';
			dls2.innerHTML='Hide';
			word=true;
			}
			
			
		}
		var word2=true;
		dls2t.onclick=function(){
			if(word2==true){
				
			pas2.type='text';
			dls2t.innerHTML='Show';
			word2=false;
			}
			else{
			pas2.type='password';
			dls2t.innerHTML='Hide';
			word2=true;
			}
			
			
		}
		
		var use=document.getElementById("use");
		use.onblur=function(){
		var uer=/^[\u0391-\uFFE5]+$/;
			
			 if(use.value==''||semail.value==null){
				yz3.innerHTML='用户名不能为空';
				yz3.style.color='white';
				yz2.innerHTML='';
				yz1.innerHTML='';
				yz4.innerHTML='';
				yz5.innerHTML='';
				yz3.style.display='block';
				yz4.style.display='none';
				yz5.style.display='none';
				yz1.style.display='none';
				yz2.style.display='none';
			}
			else if(!uer.test(use.value)){
				yz3.innerHTML='Username  格式错误';
				yz3.style.color='white';
				yz2.innerHTML='';
				yz1.innerHTML='';
				yz4.innerHTML='';
				yz5.innerHTML='';
				yz3.style.display='block';
				yz4.style.display='none';
				yz5.style.display='none';
				yz1.style.display='none';
				yz2.style.display='none';
			}
			else{
				yz3.innerHTML='正确';
				yz3.style.color='white';
				yz3.style.display='block';
				yz4.style.display='none';
				yz5.style.display='none';
				yz1.style.display='none';
				yz2.style.display='none';
			}
		}
		
		var chec1=document.getElementById("chec1");
		
		
		var ppp20=document.getElementById("ppp20");
		ppp20.onclick=function(){
		
		if(yz3.innerHTML==''&&yz4.innerHTML==''){
		if(yz5.innerHTML==''){
			yz3.innerHTML='用户名为空';
			yz4.innerHTML='Email 为空';
				yz3.style.color='white';
				yz4.style.color='white';
				yz5.style.color='white';
				yz5.innerHTML='密码为空';
				yz3.style.display='block';
				yz4.style.display='block';
				yz5.style.display='block';
		}
		
		}
		if(yz3.innerHTML=='正确'&&yz4.innerHTML=='正确'){
			if(yz5.innerHTML=='正确'&&chec1.checked==true){
		window.localStorage.a=use.value;
		window.localStorage.b=semail2.value;
		window.localStorage.c=pas2.value;
		window.location.href = "xiangqing2.html?localStorage.a";
        document.getElementById("use").value = window.location.split('?')[1];	
				
			use.value='';
			semail2.value='';
			pas2.value='';
			yz3.innerHTML='';
				yz4.innerHTML='';
				yz5.innerHTML='';
			chec1.checked=false;
			xk.style.display='block';
			xk2.style.display='none';
			ppp1.style.background='rgba(0,255,50,0.7)'
			
			ppp22.style.background='rgba(0,0,0,1)'
			}
		}
		
		
		}
		var ppp2=document.getElementById("ppp2");
		var chec=document.getElementById("chec");
		var DDIV=document.getElementById("DDiv");
		var l1=document.getElementById("l1");
		var l2=document.getElementById("l2");
		var l3=document.getElementById("l3");
		var l4=document.getElementById("l4");
		var denglu=document.getElementById("kw1_eight");
		ppp2.onclick=function(){
			if(pas.value!=localStorage.c){
				yz2.innerHTML='密码错误';
				yz2.style.color='white';
				yz2.style.display='block';
				yz4.style.display='none';
				yz5.style.display='none';
				yz1.style.display='none';
				yz3.style.display='none';
			}
			if(semail.value==''&&pas.value==''){
				yz1.innerHTML='用户名为空';
				yz1.style.color='white';
				yz2.innerHTML='密码为空';
				yz1.style.display='block';
				yz2.style.display='block';
				
				
			}
			else{
			if(semail.value==localStorage.b&&pas.value==localStorage.c){
				DDIV.style.display='none';
				denglu.innerHTML=localStorage.a;
				semail.value='';
				l1.style.display='none';
				l2.style.display='none';
				l3.style.display='none';
				l4.style.display='block';
				document.cookie="username="+use.value;
				
			 if(chec.checked==true){
			 	semail.value=localStorage.b;
			}
			 else{
			 	semail.value='';
			}
			
			}
			}
			
			}
		
		//把4的hover做了
		
		var xk0=document.getElementById("xk0");
		var a1=document.getElementById("a1");
		var a4=document.getElementById("a4");
		a4.onclick=function(){
			denglu.innerHTML='登陆';
			localStorage.removeItem('a');
			l1.style.display='block';
				l2.style.display='block';
				l3.style.display='block';
				l4.style.display='none';
		}
		a1.onclick=function(){
			DDIV.style.display='block';
			if(chec.checked==true){
				
			semail.value=localStorage.b;
			pas.value=localStorage.c;
			}
			else{
				semail.value='';
				pas.value='';
			}
			
		}
		var px=document.getElementById("px");
		
		
		px.onclick=function(){
				DDIV.style.display='none';
				yz1.style.display='none';
				yz2.style.display='none';
				yz3.style.display='none';
				yz4.style.display='none';
				yz5.style.display='none';
			}
				
				
		
		/*	window.localStorage.a=use.value;
		window.localStorage.b=semail2.value;
		window.localStorage.c=pas2.value;	*/

}
