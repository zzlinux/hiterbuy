/*******************************
*hiterbuy 公共js
*author   zzlinux 菜鸟
	*/
	window.onload=function(){
		var oDiv=document.getElementById("tab");
		var oLi=oDiv.getElementsByTagName("div")[0].getElementsByTagName("li");
		var aCon=oDiv.getElementsByTagName("div")[1].children;
		var timer=null;
		for(var i=0;i<oLi.length;i++){
				oLi[i].index=i;  //给li数组写索引属性
				oLi[i].onmouseover=function(){
						show(this.index);
					}
			}
		function show(a){
				index=a;
				var alpha=0;
				for (var j=0;j<oLi.length;j++){
						oLi[j].className="";
						aCon[j].className="";
			//			aCon[j].style.opacity=0;
			//			aCon[j].style.filter="alpha(opacity=0)";
					}
				oLi[index].className="cur";
				aCon[index].className="cur";
/*				clearInterval(timer);
				timer=setInterval(function(){
						alpha+=2;
						alpha>100&&(alpha=100);
						aCon[index].style.opacity=alpha/100;
						aCon[index].style.filter="alpha(opacity="+alpha+")";
						alpha==100&&clearInterval(timer);
					},
					5)*/
			}
		}

//////////////////下拉菜单/////////////////////////////
function displaySubMenu(node){
	var subMenu=node.getElementsByTagName("ul")[0];
	subMenu.style.display="block";
	node.className="bg-change subMenu fleft";
}

function hideSubMenu(node){
	var subMenu=node.getElementsByTagName("ul")[0];
	subMenu.style.display="none";
	node.className="subMenu fleft";
}

/*///////////////box-shadow   classChange方法　///////////*/
function classShow(block,show){
	var target=block;
	target.className=show;
}

