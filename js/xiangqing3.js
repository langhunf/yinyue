window.onload = function() {
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
	
	
	
	/*图标点击*/
	var tubiao = document.querySelectorAll(".tubiao");
	var tubiaos = document.querySelectorAll(".tubiaos")
	for(i = 0; i < tubiao.length; i++) {
		tubiao[i].index = i;
		tubiao[i].onclick = function() {
			for(j = 0; j < tubiaos.length; j++) {
				tubiaos[j].style.display = 'none';
			}
			tubiaos[this.index].style.display = 'block';
			if(this.index == 0) {
				sanjiao.style.left = 235 + 'px'
			}
			if(this.index == 1) {
				sanjiao.style.left = 413 + 'px'
			}
			if(this.index == 2) {
				sanjiao.style.left = 591 + 'px'
			}
			if(this.index == 3) {
				sanjiao.style.left = 769 + 'px'
			}
			if(this.index == 4) {
				sanjiao.style.left = 947 + 'px'
			}
		}
	}
	var nos = null;
	var nos1 = null;
	if(localStorage.tinguid) {
		nos1=localStorage.tinguid
	}else{
		nos1 = 7994;
	}

	var arr = [nos, nos1];
	yule()

	var arr = [nos, nos1];

	var n = 0;
	var timer = setInterval(function() {
		n++;
		if(n == 1) {
			jso(0)
		}
		if(n == 2) {
			zhuanji()
		}
		if(n == 3) {
			mv();
		}
		if(n == 4) {
			tupian()
		}
		if(n == 5) {
			clearInterval(timer);
		}
	}, 1)

	var tds = document.querySelectorAll('#kw3_left_one table td');
	var div1 = document.getElementById('div1');
	div1.style.textAlign = 'center';
	var ps = document.querySelector('#kw2 p');
	var imags = document.querySelector('#kw2 .img1');

	function yule() {
		jsonp({
			url: "http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.6.5.0&method=baidu.ting.artist.getinfo&format=json&tinguid=" + arr[1] + "&artistid=" + arr[1],
			data: {
				id: arr[1]
			},
			success: function(data) {
				console.log(data)
				nos=data.name;
				ps.innerHTML = data.name;
				imags.src = data.avatar_big
				tds[1].innerHTML = "姓名：" + data.name;
				tds[2].innerHTML = "歌曲数目：" + data.collect_num;
				tds[4].innerHTML = "工作室：" + data.company;
				tds[5].innerHTML = "出生地：" + data.country;
				tds[7].innerHTML = "出生年月：" + data.birth;
				tds[8].innerHTML = "星座：" + data.constellation;
				tds[10].innerHTML = "身高：" + data.stature + "cm";
				tds[11].innerHTML = "体重：" + data.weight + "kg";
				if(data.intro){
					div1.innerHTML = data.intro;
				}else{
					div1.innerHTML = '此歌手信息不详';
				}

			}
		});
	}

	//获取歌曲列表
	var lis = document.querySelectorAll('#kw3_left_gq .yincang')
	var tbody0 = document.getElementById('tbody1');

	var nub = 0;
	for(var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick = function() {
			nub = this.index + 1;
			for(i = 0; i < lis.length; i++) {
				lis[i].style.background = "#CCCCCC"
			}
			this.style.background = "orange"
			jso(this.index);
		}
	}

	for(var i = 0; i < 16; i++) {
		var tr1 = document.createElement('tr');
		tr1.className = 'ru';
		tr1.style.display = 'none';
		tbody0.appendChild(tr1);
		var td2 = document.createElement('td');
		//	td2.innerHTML=data.result.song_info.song_list[i].title;
		td2.className = 'rr2'
		tr1.appendChild(td2);
		var td3 = document.createElement('td');
		//	td3.innerHTML=so;
		td3.className = 'rr3'
		tr1.appendChild(td3);
		var td4 = document.createElement('td');
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
	var rr1 = document.getElementsByClassName('rr1')
	var rr2 = document.getElementsByClassName('rr2')
	var rr3 = document.getElementsByClassName('rr3')
	var rr = document.getElementsByClassName('ru');

	function jso(n) {
		console.log(arr)
		jsonp({
			url: "http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.6.5.0&method=baidu.ting.search.merge&format=json&query=" + arr[0] + "&page_no=" + nub + "&page_size=40&type=-1&data_source=0&use_cluster=1",
			data: {
				query: arr[0]
			},
			success: function(data) {
				console.log(data)
				for(var a = 0; a < 16; a++) {
					if(data.result.song_info.song_list[a]) {
						rr[a].style.display = 'block';
						rr2[a].innerHTML = data.result.song_info.song_list[a].title;
						rr3[a].innerHTML = data.result.song_info.song_list[a].author;
					}
				}
			}
		});
	}

	var imgs1 = document.querySelectorAll('#kw3_left_zj img');
	var divs1 = document.querySelectorAll('#kw3_left_zj div');
	var ass = document.querySelectorAll('#kw3_left_zj a');
	var spans1 = document.querySelectorAll('#kw3_left_zj span');

	function zhuanji() {
		for(var i = 0; i < divs1.length; i++) {
			divs1[i].style.display = 'none';
		}
		jsonp({
			url: "http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.6.5.0&method=baidu.ting.artist.getAlbumList&format=json&order=1&tinguid=" + arr[1] + "&offset=0&limits=30",
			data: {
				query: arr[0]
			},
			success: function(data) {
				console.log(data);
				for(var o1 = 0; o1 < divs1.length; o1++) {
					if(data.albumlist[o1]) {
						divs1[o1].style.display = 'block';
						imgs1[o1].src = data.albumlist[o1].pic_big;
						ass[o1].innerHTML = data.albumlist[o1].title;
						spans1[o1].innerHTML = data.albumlist[o1].publishtime;
					}
				}
			}
		});
	}

	var imgs2 = document.querySelectorAll('#kw3_left_MV img');
	var divs2 = document.querySelectorAll('#kw3_left_MV div');
	var ass2 = document.querySelectorAll('#kw3_left_MV a');

	function mv() {
		for(var i = 0; i < divs2.length; i++) {
			divs2[i].style.display = 'none';
		}
		jsonp({
			url: "http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.6.5.0&method=baidu.ting.artist.getAlbumList&format=json&order=1&tinguid=" + arr[1] + "&offset=0&limits=31",
			data: {
				query: arr[0]
			},
			success: function(data) {
				console.log(data)
				for(var r = 0; r < 16; r++) {
					if(data.albumlist[r + 5]) {
						divs2[r].style.display = 'block';
						imgs2[r].src = data.albumlist[r + 5].pic_big;
						ass2[r].innerHTML = data.albumlist[r + 5].title;
					}
				}
			}
		});
	}
	var imgs3 = document.querySelectorAll('#kw3_left_tp img');

	function tupian() {
		for(var i = 0; i < imgs3.length; i++) {
			imgs3[i].style.display = 'none';
		}
		jsonp({
			url: "http://tingapi.ting.baidu.com/v1/restserver/ting?from=android&version=5.6.5.0&method=baidu.ting.search.merge&format=json&query=" + arr[0] + "&page_no=" + nub + "&page_size=40&type=-1&data_source=0&use_cluster=1",
			data: {
				query: arr[0]
			},
			success: function(data) {
				console.log(data)
				for(var r = 0; r < imgs3.length; r++) {
					if(data.result.album_info.album_list[r]) {
						imgs3[r].style.display = 'block';
						imgs3[r].src = data.result.album_info.album_list[r].pic_small;
					}
				}
			}
		});
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

	/*var chec1 = document.getElementById("chec1");
	chec1.onclick = function() {

		if(!chec1.checked) {

		} else {

		}
	}*/

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
		localStorage.removeItem('a');
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
	
	
	
	
	
	
	
	
	//搜索框
	var inputs = document.querySelector('.kw1_five input');
	var kw1_five = document.getElementsByClassName('kw1_five')[0];
	var uls1 = document.querySelector('.kw1_five ul');
	var lis1 = kw1_five.getElementsByTagName('li');

	var listd = null;

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
	for(var i = 0; i < lis1.length; i++) {
		lis1[i].onclick = function(ev) {
			var son = this.getAttribute('song');
			window.localStorage.album=son;
			window.location = 'xiangqing2.html';
		}
	}
	
	
	
	
	
	

}