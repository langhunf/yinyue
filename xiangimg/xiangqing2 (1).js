window.onload = function() {
	var album = 555296014;
	if(document.cookie) {
		arr = document.cookie.split(';');
		for(var i = 0; i < arr.length; i++) {
			as1 = arr[i].split("=")[0];
			as2 = arr[i].split("=")[1];
			if(as1 == 'album') {
				console.log(as2);
				album = as2;
			}
		}
	}
	var nei = document.getElementById('jianjie');
	var gequ = '老男孩';

	var tbody0 = document.getElementById('tbody1')

	for(var i = 0; i < 8; i++) {
		var tr1 = document.createElement('tr');
		tr1.className = 'ru';
		tr1.style.display = 'none';
		tbody0.appendChild(tr1);
		var td2 = document.createElement('td');
		td2.className = 'rr1'
		tr1.appendChild(td2);
		var td3 = document.createElement('td');
		td3.className = 'rr2'
		tr1.appendChild(td3);
		var td4 = document.createElement('td');
		td4.className = 'rr3'
		tr1.appendChild(td4);
		var progress = document.createElement('progress');
		//热度随机
		progress.value = (Math.floor(Math.random() * 10 + 1)) / 10;

		//console.log(Math.floor(Math.random()*10+1));
		td4.appendChild(progress);

		var td5 = document.createElement('td');
		//	td5.innerHTML=so;
		tr1.appendChild(td5);
		var a1 = document.createElement('a');
		td5.appendChild(a1);
		var img1 = document.createElement('img');
		img1.src = 'xiangimg/bofang.png';
		a1.appendChild(img1);

		var a2 = document.createElement('a');
		td5.appendChild(a2);
		var img2 = document.createElement('img');
		img2.src = 'xiangimg/jia.png';
		a2.appendChild(img2);

		var a3 = document.createElement('a');
		td5.appendChild(a3);
		var img3 = document.createElement('img');
		img3.src = 'xiangimg/xiazai.png';
		a3.appendChild(img3);

		var a4 = document.createElement('a');
		td5.appendChild(a4);
		var img4 = document.createElement('img');
		img4.src = 'xiangimg/fenxiang.png';
		a4.appendChild(img4);

		var spans = document.createElement('span');
		a4.appendChild(spans);
		var aimg1 = document.createElement('img');
		aimg1.src = 'xiangimg/weibo.png';
		spans.appendChild(aimg1);
		var aimg2 = document.createElement('img');
		aimg2.src = 'xiangimg/kongjian.png';
		spans.appendChild(aimg2);
		var aimg3 = document.createElement('img');
		aimg3.src = 'xiangimg/boke.png';
		spans.appendChild(aimg3);
		var aimg4 = document.createElement('img');
		aimg4.src = 'xiangimg/dou.png';
		spans.appendChild(aimg4);
		var aimg5 = document.createElement('img');
		aimg5.src = 'xiangimg/ren.png';
		spans.appendChild(aimg5);
	}

	inps();
var imgs=document.getElementById('imgs')
	function inps() {
		jsonp({
			url: "http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.6.5.0&method=baidu.ting.album.getAlbumInfo&format=json&album_id=" + album,
			data: {
				album_id: album
			},
			success: function(data) {
				console.log(data)
				nei.innerHTML = data.albumInfo.info
				imgs.src= data.albumInfo.pic_radio
				gequ = data.albumInfo.title
				inpss()
			}
		});
	}

	var rr1 = document.querySelectorAll('#tbody1 .ru')
	var rd1 = document.querySelectorAll('#tbody1 .rr1')
	var rd2 = document.querySelectorAll('#tbody1 .rr2')
	var rd3 = document.querySelectorAll('#tbody1 .rr3')

	function inpss() {
		jsonp({
			url: "http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.search.common&format=json&query=" + gequ + "&page_no=-1&page_size=30",
			data: {
				query: gequ
			},
			success: function(data) {
				console.log(data)
				for(var i = 0; i < rr1.length; i++) {
					if(data.song_list[i]) {
						rr1[i].style.display = 'block'
						rd1[i].innerHTML = data.song_list[i].title
						rd2[i].innerHTML = data.song_list[i].author
					}
				}
			}
		});
	}

	var as1 = document.querySelector('#kw3 #kw3_left .as');
	var divs1 = document.querySelector('#kw3 #kw3_lefts');
	as1.onclick=function(){
		var txt=document.querySelector('#kw3 textarea');
		var neirong=txt.value;
		txt.value='';
		if(localStorage.a){
			alert('请先登录')
			return;
		}
		
		
		var div1=document.createElement('div');
		div1.className='clearfix';
		divs1.appendChild(div1);
		
		var img1=document.createElement('img');
		img1.src='imgkw/593129de383df54.png';
		div1.appendChild(img1);
		
		var p1=document.createElement('p');
		div1.appendChild(p1);
		
		var span1=document.createElement('span');
		p1.appendChild(span1);
			var a1=document.createElement('a');
			a1.innerHTML=localStorage.a
			span1.appendChild(a1);
			
			var a2=document.createElement('a');
			a2.innerHTML='举报';
			a2.className='jubao'
			span1.appendChild(a2);
			
			var a3=document.createElement('a');
			a3.innerHTML='分享';
			span1.appendChild(a3);
		
		var span2=document.createElement('span');
		span2.innerHTML=neirong;
		p1.appendChild(span2);
		
		var span3=document.createElement('span');
		p1.appendChild(span3);
			var a4=document.createElement('a');
			a4.innerHTML='2018-01-18&ensp;04:44:27';
			span3.appendChild(a4);
			
			var a5=document.createElement('a');
			a5.innerHTML='3636';
			span3.appendChild(a5);
				var img2=document.createElement('img');
				img2.src="imgkw/bg2.jpg";
				a5.appendChild(img2);
				
				var img3=document.createElement('img');
				img3.src="imgkw/heizan.png";
				a5.appendChild(img3);
			
			var a6=document.createElement('a');
			a6.innerHTML='回复';
			span3.appendChild(a6);
	}

	var xk = document.getElementById("xk");
	var xk2 = document.getElementById("xk2");
	var ppp1 = document.getElementById("ppp1");
	var ppp22 = document.getElementById("ppp22");
	ppp1.onclick = function() {
		xk.style.display = 'block';
		xk2.style.display = 'none';
		ppp1.style.background = 'rgba(0,255,50,0.7)'
		ppp22.style.background = 'rgba(0,0,0,1)'
	}
	ppp22.onclick = function() {
		xk.style.display = 'none';
		xk2.style.display = 'block';
		ppp1.style.background = 'rgba(0,0,0,1)'
		ppp22.style.background = 'rgba(0,255,50,0.7)'
	}

	var semail = document.getElementById("signin-email");
	var pas = document.getElementById("pas");
	var semail2 = document.getElementById("signin2-email");
	var pas2 = document.getElementById("pas2");
	var dls2 = document.getElementById("dls2");
	var dls2t = document.getElementById("dls2t");

	var yz1 = document.getElementById("yz1");
	var yz2 = document.getElementById("yz2");
	var yz3 = document.getElementById("yz3");
	var yz4 = document.getElementById("yz4");
	var yz5 = document.getElementById("yz5");

	semail.onblur = function() {
		var email = /^\d{5,12}@[qQ][qQ]\.com$/;
		if(semail.value == '' || semail.value == null) {
			yz1.innerHTML = 'E-mail  不能为空';
			yz1.style.color = 'white';
			yz1.style.display = 'block';
			yz2.style.display = 'none';
			yz3.style.display = 'none';
			yz4.style.display = 'none';
			yz5.style.display = 'none';
			yz2.innerHTML = '';
			yz3.innerHTML = '';
			yz4.innerHTML = '';
			yz5.innerHTML = '';
		} else if(!email.test(semail.value)) {
			yz1.innerHTML = 'E-mail  格式错误';
			yz1.style.color = 'white';
			yz1.style.display = 'block';
			yz2.style.display = 'none';
			yz3.style.display = 'none';
			yz4.style.display = 'none';
			yz5.style.display = 'none';
			yz2.innerHTML = '';
			yz3.innerHTML = '';
			yz4.innerHTML = '';
			yz5.innerHTML = '';
		} else {
			yz1.innerHTML = '正确';
			yz1.style.color = 'white';
			yz1.style.display = 'block';
			yz2.style.display = 'none';
			yz3.style.display = 'none';
			yz4.style.display = 'none';
			yz5.style.display = 'none';
		}
	}
	semail2.onblur = function() {
		var email = /^\d{5,12}@[qQ][qQ]\.com$/;
		if(semail2.value == '' || semail2.value == null) {
			yz4.innerHTML = 'E-mail  不能为空';
			yz4.style.color = 'white';
			yz2.innerHTML = '';
			yz3.innerHTML = '';
			yz1.innerHTML = '';
			yz5.innerHTML = '';
			yz4.style.display = 'block';
			yz2.style.display = 'none';
			yz3.style.display = 'none';
			yz1.style.display = 'none';
			yz5.style.display = 'none';
		} else if(!email.test(semail2.value)) {
			yz4.innerHTML = 'E-mail  格式错误';
			yz4.style.color = 'white';
			yz2.innerHTML = '';
			yz3.innerHTML = '';
			yz1.innerHTML = '';
			yz5.innerHTML = '';
			yz4.style.display = 'block';
			yz2.style.display = 'none';
			yz3.style.display = 'none';
			yz1.style.display = 'none';
			yz5.style.display = 'none';
		} else {
			yz4.innerHTML = '正确';
			yz4.style.color = 'white';
			yz4.style.display = 'block';
			yz2.style.display = 'none';
			yz3.style.display = 'none';
			yz1.style.display = 'none';
			yz5.style.display = 'none';
		}
	}
	pas.onblur = function() {
		var email = /^\d{5,12}$/;
		if(pas.value == '' || pas.value == null) {
			yz2.innerHTML = 'Password  不能为空';
			yz2.style.color = 'white';
			yz1.innerHTML = '';
			yz3.innerHTML = '';
			yz4.innerHTML = '';
			yz5.innerHTML = '';
			yz2.style.display = 'block';
			yz4.style.display = 'none';
			yz3.style.display = 'none';
			yz1.style.display = 'none';
			yz5.style.display = 'none';
		} else if(!email.test(pas.value)) {
			yz2.innerHTML = 'Password  格式错误';
			yz2.style.color = 'white';
			yz1.innerHTML = '';
			yz3.innerHTML = '';
			yz4.innerHTML = '';
			yz5.innerHTML = '';
			yz2.style.display = 'block';
			yz4.style.display = 'none';
			yz3.style.display = 'none';
			yz1.style.display = 'none';
			yz5.style.display = 'none';
		} else if(pas2.value == localStorage.c) {
			alert(localStorage.c);
			yz2.innerHTML = '正确';
			yz2.style.color = 'white';
			yz2.style.display = 'block';
			yz4.style.display = 'none';
			yz3.style.display = 'none';
			yz1.style.display = 'none';
			yz5.style.display = 'none';
		}
	}
	pas2.onblur = function() {
		var email = /^\d{5,12}$/;
		if(pas2.value == '' || pas2.value == null) {
			yz5.innerHTML = 'Password  不能为空';
			yz5.style.color = 'white';
			yz2.innerHTML = '';
			yz3.innerHTML = '';
			yz4.innerHTML = '';
			yz1.innerHTML = '';
			yz5.style.display = 'block';
			yz4.style.display = 'none';
			yz3.style.display = 'none';
			yz1.style.display = 'none';
			yz2.style.display = 'none';
		} else if(!email.test(pas2.value)) {
			yz5.innerHTML = 'Password  格式错误';
			yz5.style.color = 'white';
			yz2.innerHTML = '';
			yz3.innerHTML = '';
			yz4.innerHTML = '';
			yz1.innerHTML = '';
			yz5.style.display = 'block';
			yz4.style.display = 'none';
			yz3.style.display = 'none';
			yz1.style.display = 'none';
			yz2.style.display = 'none';
		} else {

			yz5.innerHTML = '正确';
			yz5.style.color = 'white';
			yz5.style.display = 'block';
			yz4.style.display = 'none';
			yz3.style.display = 'none';
			yz1.style.display = 'none';
			yz2.style.display = 'none';
		}
	}
	var word = true;
	dls2.onclick = function() {
		if(word == true) {

			pas.type = 'text';
			dls2.innerHTML = 'Show';
			word = false;
		} else {
			pas.type = 'password';
			dls2.innerHTML = 'Hide';
			word = true;
		}

	}
	var word2 = true;
	dls2t.onclick = function() {
		if(word2 == true) {

			pas2.type = 'text';
			dls2t.innerHTML = 'Show';
			word2 = false;
		} else {
			pas2.type = 'password';
			dls2t.innerHTML = 'Hide';
			word2 = true;
		}

	}

	var use = document.getElementById("use");
	use.onblur = function() {
		var uer = /^[\u0391-\uFFE5]+$/;

		if(use.value == '' || semail.value == null) {
			yz3.innerHTML = '用户名不能为空';
			yz3.style.color = 'white';
			yz2.innerHTML = '';
			yz1.innerHTML = '';
			yz4.innerHTML = '';
			yz5.innerHTML = '';
			yz3.style.display = 'block';
			yz4.style.display = 'none';
			yz5.style.display = 'none';
			yz1.style.display = 'none';
			yz2.style.display = 'none';
		} else if(!uer.test(use.value)) {
			yz3.innerHTML = 'Username  格式错误';
			yz3.style.color = 'white';
			yz2.innerHTML = '';
			yz1.innerHTML = '';
			yz4.innerHTML = '';
			yz5.innerHTML = '';
			yz3.style.display = 'block';
			yz4.style.display = 'none';
			yz5.style.display = 'none';
			yz1.style.display = 'none';
			yz2.style.display = 'none';
		} else {
			yz3.innerHTML = '正确';
			yz3.style.color = 'white';
			yz3.style.display = 'block';
			yz4.style.display = 'none';
			yz5.style.display = 'none';
			yz1.style.display = 'none';
			yz2.style.display = 'none';
		}
	}

	var chec1 = document.getElementById("chec1");
	chec1.onclick = function() {

		if(!chec1.checked) {

		} else {

		}
	}

	var ppp20 = document.getElementById("ppp20");
	ppp20.onclick = function() {

		if(yz3.innerHTML == '正确' && yz4.innerHTML == '正确') {
			if(yz5.innerHTML == '正确' && chec1.checked == true) {
				window.localStorage.a = use.value;
				window.localStorage.b = semail2.value;
				window.localStorage.c = pas2.value;

				use.value = '';
				semail2.value = '';
				pas2.value = '';
				yz3.innerHTML = '';
				yz4.innerHTML = '';
				yz5.innerHTML = '';
				chec1.checked = false;
				xk.style.display = 'block';
				xk2.style.display = 'none';
				ppp1.style.background = 'rgba(0,255,50,0.7)'

				ppp22.style.background = 'rgba(0,0,0,1)'
			}
		}
	}
	var ppp2 = document.getElementById("ppp2");
	var chec = document.getElementById("chec");
	var DDIV = document.getElementById("DDiv");
	var l1 = document.getElementById("l1");
	var l2 = document.getElementById("l2");
	var l3 = document.getElementById("l3");
	var l4 = document.getElementById("l4");
	var denglu = document.getElementById("kw1_eight");
	ppp2.onclick = function() {
		if(pas.value != localStorage.c) {
			yz2.innerHTML = '密码错误';
			yz2.style.color = 'white';
			yz2.style.display = 'block';
			yz4.style.display = 'none';
			yz5.style.display = 'none';
			yz1.style.display = 'none';
			yz3.style.display = 'none';
		}
		if(semail.value == '' && pas.value == '') {
			window.location.href = '#';

		} else {
			if(semail.value == localStorage.b && pas.value == localStorage.c) {
				DDIV.style.display = 'none';
				denglu.innerHTML = localStorage.a;
				semail.value = '';
				l1.style.display = 'none';
				l2.style.display = 'none';
				l3.style.display = 'none';
				l4.style.display = 'block';
				document.cookie = "username=" + use.value;

				if(chec.checked == true) {
					semail.value = localStorage.b;
				} else {
					semail.value = '';
				}

			}
		}

	}

	//把4的hover做了

	var xk0 = document.getElementById("xk0");
	var a1 = document.getElementById("a1");
	var a4 = document.getElementById("a4");
	a4.onclick = function() {
		denglu.innerHTML = '登陆';
		l1.style.display = 'block';
		l2.style.display = 'block';
		l3.style.display = 'block';
		l4.style.display = 'none';
	}
	a1.onclick = function() {
		DDIV.style.display = 'block';
		if(chec.checked == true) {

			semail.value = localStorage.b;
			pas.value = localStorage.c;
		} else {
			semail.value = '';
			pas.value = '';
		}

	}
	var px = document.getElementById("px");

	px.onclick = function() {
		DDIV.style.display = 'none';

	}

}