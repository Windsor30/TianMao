/*
* @Author: Windsor
* @Date:   2017-09-18 17:15:01
* @Last Modified by:   Windsor
* @Last Modified time: 2017-09-20 16:46:39
*/
window.onload = function(){
	let aside = document.getElementsByClassName('asideul')[0];
	let lis = aside.getElementsByTagName('li');
	let item = document.getElementsByClassName('item');
	let circleBotton = document.getElementsByClassName('circle-botton')[0];
	let liButton = circleBotton.getElementsByTagName('li');
	let imgul = document.getElementsByClassName('img')[0];
	let imgW = parseInt(getComputedStyle(imgul, null).width);
	// console.log(imgW);
	let bannerimg = imgul.getElementsByTagName('li');
	console.log(bannerimg);
	let main = document.getElementsByClassName('main-box1')[0];
	let t = setInterval(move, 2000);
	let num = 0;
	let now = 0;
	let next = 0;
	/////////////////////////////////////////////////////////////
	main.onmouseover = function(){
		clearInterval(t);
	}
	main.onmouseout = function(){
		t = setInterval(move, 3000);
	}
	/////////////////////////////////////////////////////////////
	/*function move(){
		num++;
		if(num == liButton.length){
			num = 0;
		}
		for(let j = 0;j < bannerimg.length;j ++){
			// bannerimg[j].style.display = 'none';
			animate(bannerimg[j],{opacity:0});
			liButton[j].style.background = '#16161c';
		}
		// bannerimg[num].style.display = 'block';
		animate(bannerimg[num],{opacity:1});
		liButton[num].style.background = '#79797e';
	}*/
	function move(){
		next ++;
		if(now == bannerimg.length-1){
			next = 0;
		}
		bannerimg[next].style.left = `${imgW}px`;
		liButton[next].style.background = '#16161c';
		animate(bannerimg[now],{left:-imgW});
		liButton[now].style.background = '#16161c';
		animate(bannerimg[next],{left:0});
		liButton[next].style.background = '#79797e';
		now = next;
	}
	/*function moveL(){
		num--;
		if(num < 0){
			num = bannerimg.length-1;
		}
		for(let j = 0;j < bannerimg.length;j ++){
			bannerimg[j].style.display = 'none';
			liButton[j].style.background = '#16161c';
		}
		bannerimg[num].style.display = 'block';
		liButton[num].style.background = '#79797e';
	}*/
	/////////////////////////////////////////////////////////////
	/*for(let i = 0;i < lis.length;i ++){
		lis[i].onmouseover = function(){
			item[i].style.display = 'block';
		}
		lis[i].onmouseout = function(){
			item[i].style.display = 'none';
		}
	}*/
    /////////////////////////////////////////////////////////////
	/*for(let i = 0;i < liButton.length;i ++){
		liButton[i].onmouseover = function(){
			for(let j = 0;j < bannerimg.length;j ++){
					// bannerimg[j].style.display = 'none';
					animate(bannerimg[j],{opacity:0});
					liButton[j].style.background = '#16161c';
				}
				// bannerimg[i].style.display = 'block';
				animate(bannerimg[i],{opacity:1});
				liButton[i].style.background = '#79797e';
				num = i;*/
			/*bannerimg[i].className = 'xian';
			liButton[i].style.background = '#79797e';
			for(let j = 0;j < i;j++){
				bannerimg[j].className = 'bannerimg';
				liButton[j].style.background = '#16161c';
			}
			for(let j = i+1;j < liButton.length;j ++){
				bannerimg[j].className = 'bannerimg';
				liButton[j].style.background = '#16161c';
			}*/
	/*	}
	}*/
	for(let i = 0;i < liButton.length;i ++){
		liButton[i].onmouseover = function(){
			if(now == i){
				return;
			}
			bannerimg[i].style.left = `${imgW}px`;
			liButton[i].style.background = '#16161c';
			animate(bannerimg[now],{left:-imgW});
			liButton[now].style.background = '#16161c';
			animate(bannerimg[i],{left:0});
			liButton[i].style.background = '#79797e';
			now = next = i;
		}
	}
	/////////////////////////////////////////////////////////////
}