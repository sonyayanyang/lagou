var DOM=new Tool;
var thumbs=DOM.getElementsByClass("thumbs")[0];
var oLis=thumbs.getElementsByTagName("li");
var control=DOM.getElementsByClass("banner_control")[0];
var oem=control.getElementsByTagName("em")[0];
var banner=DOM.getElementsByClass("banner_bg")[0];
DOM.setCss(banner,"margin-top",0);
DOM.setCss(oem,"top",0);
for(var i=0;i<oLis.length;i++){
    oLis[i].index=i;
    var a=0;
    oLis[i].onmouseenter=function(){
        clearInterval(timer);
        a=this.index;

        aa(this,a);
        animate(banner,"margin-top",a*-160,300);
        animate(oem,"top",a*55,300)

        timer=setTimeout(function(){
            timer=setInterval(function(){
                autoStep("margin-top",a);
            },2000)
        },2000);

    }

}

var step=0;
DOM.addClass("current",oLis[step]);
function autoStep(){
    step=arguments[1]||0;

    if(arguments[0]=="margin-top"){
        step++;
        a=step;
        if(step>=3){
            step=0;
            a=step;
            aa(oLis[step],a);
            animate(banner,"margin-top",step*-160,300);
            animate(oem,"top",step*55,300)
        }else{
            aa(oLis[step],step);
            animate(banner,"margin-top",step*-160,300);
            animate(oem,"top",step*55,300)
        }
    }
}

function aa(ele,index){
    for(var i=0;i<oLis.length;i++){
        DOM.removeClass("current",oLis[i])
    }
    if(index==oLis.length){
        DOM.addClass("current",oLis[0])
    }else{
        DOM.addClass("current",oLis[index])
    }
}

var timer=window.setInterval(function(){
    autoStep("margin-top",a);
},2000);
