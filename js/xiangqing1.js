$(function() {

	//全球磅

	var btn = true;
	$(".yins").eq(0).click(function() {
		if(btn == false) {
			$(".shang").eq(0).css("display", "none");
			$(".xia").eq(0).css("display", "block");
			$(".yin").each(function(i, elem) {
				$(elem).stop().slideDown(500, "linear");
			})
			btn = true;
		} else {
			$(".shang").eq(0).css("display", "block");
			$(".xia").eq(0).css("display", "none");
			$(".yin").each(function(i, elem) {
				$(elem).stop().slideUp(500, "linear");
			})
			btn = false;
		}
	})

	//分类磅
	var btns = true;
	$(".yins").eq(1).click(function() {
		if(btns == false) {
			$(".shang").eq(1).css("display", "none");
			$(".xia").eq(1).css("display", "block");
			$(".yino").each(function(i, elem) {
				$(elem).stop().slideDown(500, "linear");
			})
			btns = true;
		} else {
			$(".shang").eq(1).css("display", "block");
			$(".xia").eq(1).css("display", "none");
			$(".yino").each(function(i, elem) {
				$(elem).stop().slideUp(500, "linear");
			})
			btns = false;
		}
	})

	//点击图片变化
	$(".yincang").each(function(i, elems) {
		$(elems).click(function() {
			$("#kw2 div ul li span").each(function(i, elemsp) {
				$(elemsp).css('opacity', 0)
			})
			$(".yincang").find('a').each(function(i, elemsp) {
				$(elemsp).css('font-weight', "100")
			})
			$(".yincang").find('span').eq(i).css("opacity", 1)
			$(".yincang").find('a').eq(i).css("font-weight", 'bold')

			$("#kw2 div:nth-of-type(2) p:nth-of-type(1) img").each(function(i, elemsp) {
				$(elemsp).css('display', 'none')
			})
			$("#kw2 div:nth-of-type(2) p:nth-of-type(1) img").eq(i).css("display", 'block')
		})
	})

	//获取歌曲列表
	var lis = document.querySelectorAll('#kw2 .yincang')
	var tbody0 = document.getElementById('tbody1');
	//var ll1=tbody1.getElementsByTagName('tr');

	var arr = ['Billboard榜', 'itunes音乐榜', '英国UK榜', '台湾Hito', '韩国M-net榜', '日本公信榜', '香港电台榜', '新歌', '飙升', '华语', '日韩', '舞曲', '影视', '真声音', '流行榜']

	for(var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick = function() {
			jso(this.index);
		}
	}

	for(var i = 0; i < 30; i++) {
		var tr1 = document.createElement('tr');
		tr1.className = 'ru';
		tr1.style.display = 'none'
		tbody0.appendChild(tr1);
		var td1 = document.createElement('td');
		//td1.innerHTML=so;
		td1.className = 'rr1'
		tr1.appendChild(td1);
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

	jso(0);

	function jso(n) {
		var aee = [2, 1, 8, 18, 6, 11, 12, 7, 8, 14, 15, 21, 20, 17, 23, 26]
		var so = 0;
		jsonp({
			url: "http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.billboard.billList&format=json&type=" + aee[n] + "&offset=0&size=50",
			data: {
				query: arr[n]
			},
			success: function(data) {
				console.log(data)
				for(var i = 0; i < 30; i++) {
					if(data.song_list[i]) {
						rr[i].style.display = 'block';
						so++;
						rr1[i].innerHTML = so;
						rr2[i].setAttribute('song',data.song_list[i].album_id);
						rr2[i].innerHTML = data.song_list[i].title;
						rr3[i].setAttribute('son', data.song_list[i].ting_uid);
						rr3[i].innerHTML = data.song_list[i].artist_name;
					}
				}
			}
		});
	}

	for(var i = 0; i < rr3.length; i++) {
		rr3[i].onclick = function() {
			var son1 = this.getAttribute('son');
			window.localStorage.tinguid=son1;
			window.location = 'xiangqing3.html';

		}
	}
	for(var i = 0; i < rr2.length; i++) {
		rr2[i].onclick = function() {
			var son = this.getAttribute('song');
			window.localStorage.album=son;
			window.location = 'xiangqing2.html';
		}
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
})