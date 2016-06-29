function getCss(ele,attr){
	if(typeof getComputedStyle=="function"){
		return parseFloat(getComputedStyle(ele,null)[attr]);
	}else{
		if(attr=="opacity"){
			var val=ele.currentStyle.filter;
			var reg=/alpha\(opacity=(\d+(?:\.\d+)?)\)/;
			if(reg.test(val)){
				return parseFloat(RegExp.$1)/100;	
			}else{
				return 1;
			}
		}else{
			return parseFloat(ele.currentStyle[attr]);
		}
	}
}

function setCss(ele,attr,val){
	switch(attr){
		case "opacity":
			ele.style.opacity=val;
			ele.style.filter="alpha(opacity="+val*100+")";
			break;
		case "top":
		case "left":
		case "width":
		case "height":
			ele.style[attr]=val+"px";
			break;
		case "float":
			ele.style.cssFloat=val;
			ele.style.styleFloat=val;
			break;
		default:
			ele.style[attr]=val;		
	}
}

function animate_obj(ele,obj,duration,fnCallback){
	var oBegin={};//保存各方向的起始值
	var oChange={};//保存各方向的运动距离
	var flag=0;
	for(var attr in obj){//循环分解各方向的起始值和运动距离
		var target=obj[attr];
		var begin=getCss(ele,attr);
		var change=target-begin;
		if(change){//避免起点和终点相同。
			oBegin[attr]=begin;
			oChange[attr]=change;
			flag++;
		}
	}
	if(flag===0)return;
	
	var interval=13;
	var times=0;
	clearInterval(ele.timer);
	function step(){
		times+=interval;
		if(times>=duration){
			for(var attr in obj){
				var target=obj[attr];
				setCss(ele,attr,target);				
			}
			clearInterval(ele.timer);//停止动画
			ele.timer=null;//并且把标识清除
			if(typeof fnCallback=="function"){
				fnCallback.call(ele);
			}
		}else{
			for(var attr in oChange){
				var change=oChange[attr];
				var begin=oBegin[attr];
				var val=times/duration*change+begin;
				setCss(ele,attr,val);	
			}
		}
	}
	ele.timer=window.setInterval(step,interval);
}
function animate(ele,attr,target,duration){
    //ele是做动画的元素,attr是运动的方向，比如left,top,width,height,opacity，target是终点，duration规定的时间
    //target//这个是参数传进来的，表示终点
    var begin=getCss(ele,attr);//表示起点
    var change=target-begin;//运动的距离
    var interval=13;//每走一步的时间间隔
    var times=0;
    function step(){
        times+=interval;
        if(times>=duration){
            clearInterval(timer);
            ele.style[attr]=target+"px";
            //return;
        }else{
            ele.style[attr]=times/duration*change+begin+"px";
        }
    }
    var timer=window.setInterval(step,interval);

}
