/*
* @Author: Windsor
* @Date:   2017-09-18 17:15:01
* @Last Modified by:   Windsor
* @Last Modified time: 2017-09-20 11:42:50
*/
window.onload = function(){
	let aside = document.getElementsByClassName('asideul')[0];
	let lis = aside.getElementsByTagName('li');
	let item = document.getElementsByClassName('item');
	let circleBotton = document.getElementsByClassName('circle-botton')[0];
	let liButton = circleBotton.getElementsByTagName('li');
	let imgul = document.getElementsByClassName('img')[0];
	let bannerimg = imgul.getElementsByTagName('img');
	let main = document.getElementsByClassName('main-box1')[0];
	let t = setInterval(move, 3000);
	let num = 0;
	/////////////////////////////////////////////////////////////
		main.onmouseover = function(){
			clearInterval(t);
		}
		main.onmouseout = function(){
			t = setInterval(move, 3000);
		}
	/////////////////////////////////////////////////////////////
	function move(){
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
	for(let i = 0;i < lis.length;i ++){
		lis[i].onmouseover = function(){
			item[i].style.display = 'block';
		}
		lis[i].onmouseout = function(){
			item[i].style.display = 'none';
		}
	}
    /////////////////////////////////////////////////////////////
	for(let i = 0;i < liButton.length;i ++){
		liButton[i].onmouseover = function(){
			for(let j = 0;j < bannerimg.length;j ++){
					// bannerimg[j].style.display = 'none';
					animate(bannerimg[j],{opacity:0});
					liButton[j].style.background = '#16161c';
				}
				// bannerimg[i].style.display = 'block';
				animate(bannerimg[i],{opacity:1});
				liButton[i].style.background = '#79797e';
				num = i;
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
		}
	}
	/////////////////////////////////////////////////////////////
}